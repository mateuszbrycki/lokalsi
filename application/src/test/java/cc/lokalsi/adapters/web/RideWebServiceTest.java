package cc.lokalsi.adapters.web;

import cc.lokalsi.config.CommandHandlerConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
@Import(CommandHandlerConfig.class)
class RideWebServiceTest {
  @Autowired private MockMvc mockMvc;

  @Test
  public void shouldReturnCreatedResult() throws Exception {
    this.mockMvc
        .perform(
            put("/ride")
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                  """
                    {
                      "name": "new ride",
                      "rideTime": "2020-10-17 10:00"
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
                      "rideTime": "2020-10-17 10:00"
                    } 
                  """))
        .andDo(print())
        .andExpect(status().isBadRequest())
    .andExpect(content().string("Ride name cannot be empty"));
  }
}
