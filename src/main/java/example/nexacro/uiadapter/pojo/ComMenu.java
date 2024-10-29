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
public class ComMenu extends NexacroBase {
    // Fields
    private String menuId;
    private String menuNm;
    private String sysId;
    private String highMenuId;
    private String menuTpcd;
    private String menuLvl;
    private String prgId;
    private String prgPath;
    private String prgType;
    private String callParam;
    private int sortSeq;
    private String rmk;
    private String usyn;
    private String mgrUsyn;
    private String comYn;
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

    public String getMenuNm() {
        return menuNm;
    }

    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
    }

    public String getSysId() {
        return sysId;
    }

    public void setSysId(String sysId) {
        this.sysId = sysId;
    }

    public String getHighMenuId() {
        return highMenuId;
    }

    public void setHighMenuId(String highMenuId) {
        this.highMenuId = highMenuId;
    }

    public String getMenuTpcd() {
        return menuTpcd;
    }

    public void setMenuTpcd(String menuTpcd) {
        this.menuTpcd = menuTpcd;
    }

    public String getMenuLvl() {
        return menuLvl;
    }

    public void setMenuLvl(String menuLvl) {
        this.menuLvl = menuLvl;
    }

    public String getPrgId() {
        return prgId;
    }

    public void setPrgId(String prgId) {
        this.prgId = prgId;
    }

    public String getPrgPath() {
        return prgPath;
    }

    public void setPrgPath(String prgPath) {
        this.prgPath = prgPath;
    }

    public String getPrgType() {
        return prgType;
    }

    public void setPrgType(String prgType) {
        this.prgType = prgType;
    }

    public String getCallParam() {
        return callParam;
    }

    public void setCallParam(String callParam) {
        this.callParam = callParam;
    }

    public Integer getSortSeq() {
        return sortSeq;
    }

    public void setSortSeq(Integer sortSeq) {
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

    public String getMgrUsyn() {
        return mgrUsyn;
    }

    public void setMgrUsyn(String mgrUsyn) {
        this.mgrUsyn = mgrUsyn;
    }

    public String getComYn() {
        return comYn;
    }

    public void setComYn(String comYn) {
        this.comYn = comYn;
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