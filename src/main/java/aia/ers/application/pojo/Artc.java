package aia.ers.application.pojo;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <pre>
 * @title   권한
 * @desc
 * @package aia.ers.application.pojo
 * <pre>
 * 
 * @author  이중섭
 * @since   2024. 11. 12.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 12.	이중섭		최초작성
 */

@EqualsAndHashCode(callSuper = true)
@Data
public class Artc extends NexacroBase {
    // Fields
    private String bdgYear;         //예산년도
    private String cstCntrCd;       //코스트센터코드
    private String cstCntrCdNm;       //코스트센터코드명
    private String artcCd;          //항목코드
    private String artcCdNm;          //항목코드명
    private String pjtClssfc;       //프로젝트구분
    private String useYn;           //사용여부
    private String cretrId;         //생성아이디
    private String cretDttm;        //생성일시
    private String mdfrId;          //수정자아이디
    private String mdfDttm;         //수정일시

    //조회조건용
    private String searchText;      //검색어
}