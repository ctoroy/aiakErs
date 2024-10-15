package example.nexacro.uiadapter.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CryptorRequestDto {
    @NotNull
    private String text = "";
    @NotNull
    private String type = "";
}
