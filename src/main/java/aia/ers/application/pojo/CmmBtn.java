package aia.ers.application.pojo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package aia.ers.application.pojo
 * <pre>
 * 
 * @author  송원창
 * @since   2024. 10. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			    변경자		내용
 * ------------------------------------------------
 * 2024. 10. 18.	송원창	최초작성
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class CmmBtn extends NexacroBase {
    // Fields
    private String menuId;
    private String btnId;
    private String btnNm;
    private String functionNm;
    private String cssNm;
    private int sortSeq;
    private String rmk;
    private String usyn;
    private String crtrId;
    private LocalDateTime crtrDttm;
    private String mdpsId;
    private LocalDateTime mdpsDttm;
}