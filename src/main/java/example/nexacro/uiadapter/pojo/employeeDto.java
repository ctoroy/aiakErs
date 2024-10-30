package example.nexacro.uiadapter.pojo;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class employeeDto extends NexacroBase {
    private Integer global_id = 0;
    private String team_cd = "";
    private String employee_name_eng = "";
    private String employee_name_kor = "";
    private String role = "";
    private String extension_no = "";
    private String email = "";
    private Integer rank = 0;
    private String job_title = "";
    private String resign_yn = "";
    private String inserted_date = "";
    private String is_not_change_yn = "";
    private String group = "";
    private Integer id = 0;
    private String created = "";
    private String modified = "";
}
