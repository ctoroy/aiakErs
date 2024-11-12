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
 * @author  강성호
 * @since   2024. 11. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 11.	강성호		최초작성
 */

@EqualsAndHashCode(callSuper = true)
@Data
public class Emp extends NexacroBase {
    // Fields
    private String searchText;      //검색어
    private String empNo;           //사원번호
    private String empEngNm;        //사원영문명
    private String empNm;           //사원명
    private String deptRlNm;        //부서역할명
    private String lcetNo;	        //내선번호
    private String emalAddr;	      //이메일주소
    private String grad;	          //등급
    private String dutyTtlNm;	      //직무제목명
    private String rgntnYn;	        //퇴사여부
    private String chgYn;	          //변경여부
    private String grpName;	        //그룹이름
    private String idNm;	          //아이디명
    private String deptCd;          //부서코드
    private String deptNm;          //부서명
    private String cretrId;         //생성아이디
    private String cretDttm;        //생성일시
    private String mdfrId;          //수정자아이디
    private String mdfDttm;         //수정일시
}