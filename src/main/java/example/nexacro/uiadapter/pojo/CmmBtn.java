package example.nexacro.uiadapter.pojo;

import java.time.LocalDateTime;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package example.nexacro.uiadapter.pojo
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

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getBtnId() {
        return btnId;
    }

    public void setBtnId(String btnId) {
        this.btnId = btnId;
    }

    public String getBtnNm() {
        return btnNm;
    }

    public void setBtnNm(String btnNm) {
        this.btnNm = btnNm;
    }

    public String getFunctionNm() {
        return functionNm;
    }

    public void setFunctionNm(String functionNm) {
        this.functionNm = functionNm;
    }

    public String getCssNm() {
        return cssNm;
    }

    public void setCssNm(String cssNm) {
        this.cssNm = cssNm;
    }

    public int getSortSeq() {
        return sortSeq;
    }

    public void setSortSeq(int sortSeq) {
        this.sortSeq = sortSeq;
    }

    public String getRmk() {
        return rmk;
    }

    public void setRmk(String rmk) {
        this.rmk = rmk;
    }

    public String getUsyn() {
        return usyn;
    }

    public void setUsyn(String usyn) {
        this.usyn = usyn;
    }

    public String getCrtrId() {
        return crtrId;
    }

    public void setCrtrId(String crtrId) {
        this.crtrId = crtrId;
    }

    public LocalDateTime getCrtrDttm() {
        return crtrDttm;
    }

    public void setCrtrDttm(LocalDateTime crtrDttm) {
        this.crtrDttm = crtrDttm;
    }

    public String getMdpsId() {
        return mdpsId;
    }

    public void setMdpsId(String mdpsId) {
        this.mdpsId = mdpsId;
    }

    public LocalDateTime getMdpsDttm() {
        return mdpsDttm;
    }

    public void setMdpsDttm(LocalDateTime mdpsDttm) {
        this.mdpsDttm = mdpsDttm;
    }
}