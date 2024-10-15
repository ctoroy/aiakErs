package example.nexacro.uiadapter.controller;

import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.security.keyvault.secrets.SecretClient;
import com.azure.security.keyvault.secrets.SecretClientBuilder;
import com.azure.security.keyvault.secrets.models.KeyVaultSecret;
import example.nexacro.uiadapter.dto.CryptorDto;
import example.nexacro.uiadapter.dto.CryptorRequestDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springdoc.core.annotations.ParameterObject;

@Slf4j
@RestController
@Validated
public class keyvaultController {

//    KeyVaultService keyVaultService = new KeyVaultService("https://<your-key-vault-name>.vault.azure.net/");

    @PostMapping("/hash")
    public CryptorDto cryptor(@ParameterObject @RequestBody @Valid CryptorRequestDto cryptorRequestDto)
    {
        String text = cryptorRequestDto.getText();
        String type = cryptorRequestDto.getType();

        CryptorDto cDto = new CryptorDto();
        cDto.setOrigin("text");
        cDto.setResultStr("resultString");
        cDto.setCode("0");

        return cDto;

    }
}


//class KeyVaultService {
//    private final SecretClient secretClient;
//
//    public KeyVaultService(String keyVaultUrl) {
//        this.secretClient = new SecretClientBuilder()
//                .vaultUrl(keyVaultUrl)
//                .credential(new DefaultAzureCredentialBuilder().build())
//                .buildClient();
//    }
//
//    public String getSecretValue(String secretName) {
//        KeyVaultSecret secret = secretClient.getSecret(secretName);
//        return secret.getValue();
//    }
//}