package cc.lokalsi.adapters.web;

import cc.lokalsi.config.HandlersConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
@ActiveProfiles("test")
@Import(HandlersConfig.class)
class RideWebServiceTest {
  @Autowired private MockMvc mockMvc;

  @Test
  public void shouldReturnCreatedResult() throws Exception {
    performAndAssertCreationAction();
  }

  private void performAndAssertCreationAction() throws Exception {
    this.mockMvc
        .perform(
            put("/ride")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                  """
                    {
                      "name": "new ride",
                      "rideTime": "2020-10-17 10:00",
                      "description": "New Ride description",
                      "advancementLevel": "FIRST"
                    }
                  """))
        .andDo(print())
        .andExpect(status().isCreated());
  }

  @Test
  public void shouldReturnErrorResult() throws Exception {
    this.mockMvc
        .perform(
            put("/ride")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                  """
                    {
                      "rideTime": "2020-10-17 10:00",
                      "description": "New Ride description",
                      "advancementLevel": "FIRST"
                    }
                  """))
        .andDo(print())
        .andExpect(status().isBadRequest())
    .andExpect(content().string("Ride name cannot be empty"));
  }

  @Test
  public void shouldReturnListOfRides() throws Exception {
    performAndAssertCreationAction();
    this.mockMvc
            .perform(get("/rides")
                            .contentType(MediaType.APPLICATION_JSON))
            .andDo(print())
            .andExpect(status().isOk())
            .andExpect(
                    MockMvcResultMatchers.jsonPath("$.[0].name").value("new ride"))
            .andExpect(
                    MockMvcResultMatchers.jsonPath("$.[0].description").value("New Ride description"))
            .andExpect(
                    MockMvcResultMatchers.jsonPath("$.[0].advancementLevel").value("FIRST"));
  }
}
