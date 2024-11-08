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
 * @since   2024. 11. 06.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜						변경자		내용
 * ------------------------------------------------
 * 2024. 11. 06.	강성호		최초작성
 */

@EqualsAndHashCode(callSuper = true)
@Data
public class Auth extends NexacroBase {
    // Fields
    private String searchText;      //검색어
    private String authId;          //권한아이디
    private String empNo;           //사원번호
    private String authNm;          //권한명
    private String rmak;            //비고
    private String authClssfc;      //권한타입
    private String useYn;           //사용여부
    private String cretrId;         //생성아이디
    private String cretDttm;        //생성일시
    private String mdfrId;          //수정자아이디
    private String mdfDttm;         //수정일시
    private String mnuId;           //메뉴ID
    private String mnuNm;           //메뉴명
    private String sysId;           //시스템ID
    private String upMnuId;         //상위메뉴ID
    private String mnuTpCd;         //메뉴유형코드
    private int mnuLvlSize;         //메뉴레벨크기
    private String authUseYn;       //메뉴권한사용여부
    private String prgmId;          //프로그램아이디
    private String prgmPathNm;      //프로그램경로명
    private String prgmTypeNm;      //프로그램타입명
    private String smmnParmtNm;     //호출파라미터명
    private String sortSeq;         //정렬순번
    private String mnuPrintYn;      //메뉴출력여부
}