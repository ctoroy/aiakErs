package aia.ers.application.pojo;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package aia.ers.application.pojo
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2017. 11. 20.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 20.		TOBESOFT	최초작성
 */

@EqualsAndHashCode(callSuper = true)
@Data
public class Dept extends NexacroBase {
	
	/** 검색조건 */
    private String searchCondition = "";

    /** 검색Keyword */
    private String searchKeyword = "";

    /** 검색사용여부 */
    private String searchUseYn = "";
    
    // Fields
    private int  	deptId;
    private String  deptName;
    private int  memberCount;

}
