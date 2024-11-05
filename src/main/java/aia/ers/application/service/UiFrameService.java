package aia.ers.application.service;

import aia.ers.application.pojo.CmmBtn;
import aia.ers.application.pojo.ComCode;
import aia.ers.application.pojo.ComMenu;

import java.util.List;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package aia.ers.application.service
 * <pre>
 * 
 * @author  송원창
 * @since   2024. 10. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			    변경자		내용
 * ------------------------------------------------
 * 2024. 10. 18.	송원창	    최초작성
 */
public interface UiFrameService {

    List<ComMenu> selectMenuList();
    void saveMenuList(List<ComMenu> comMenus);

    List<CmmBtn> selectCmmBtnList(CmmBtn cmmBtn);
    void saveCmmBtnList(List<CmmBtn> cmmBtns);

    List<ComCode> selectComCodeList(ComCode comCode);
    List<ComCode> selectComCodeDetailList(ComCode comCode);
    void saveComCodeList(List<ComCode> codeList, List<ComCode> codeDetailList);
}