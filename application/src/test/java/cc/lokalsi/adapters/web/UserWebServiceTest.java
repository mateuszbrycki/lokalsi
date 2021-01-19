package cc.lokalsi.adapters.web;

import cc.lokalsi.config.HandlersConfig;
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
@Import(HandlersConfig.class)
public class UserWebServiceTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldReturnCreatedResult() throws Exception {
        performAndAssertCreationAction();
    }

    private void performAndAssertCreationAction() throws Exception {
        this.mockMvc
                .perform(
                        put("/user")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(
                                        """
                                          {
                                            "email": "mateusz.brycki3@gmail.com",
                                            "password": "pass123",
                                            "repeatedPassword": "pass123"
                                          } 
                                        """))
                .andDo(print())
                .andExpect(status().isCreated());
    }

    @Test
    public void shouldReturnErrorResult() throws Exception {
        this.mockMvc
                .perform(
                        put("/user")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(
                                        """
                                          {
                                            "email": "mateusz.brycki3@gmail.com",
                                            "password": "pass123",
                                            "repeatedPassword": ""
                                          } 
                                        """))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andExpect(content().string("Repeated password cannot be empty"));
    }
}
