package example.nexacro.uiadapter.service;

import example.nexacro.uiadapter.pojo.CmmBtnList;
import example.nexacro.uiadapter.pojo.MenuList;

import java.util.List;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package example.nexacro.uiadapter.service
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
public interface UiFrameService {

    List<MenuList> selectMenuList();
    void saveMenuList(List<MenuList> menuLists);

    List<CmmBtnList> selectCmmBtnList(CmmBtnList cmmBtnList);
    void saveCmmBtnList(List<CmmBtnList> cmmBtnLists);
}