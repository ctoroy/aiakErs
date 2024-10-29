package example.nexacro.uiadapter.pojo;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class departDto extends NexacroBase{
    private String org_unit = "";
    private String team_cd = "";
    private String team_name_eng = "";
    private String team_name_kor = "";
    private String team_parent_cd = "";
    private String created_dt = "";
    private String delete_yn = "";
    private Integer display_order = 0;
    private String modified = "";
    private String created = "";
}
