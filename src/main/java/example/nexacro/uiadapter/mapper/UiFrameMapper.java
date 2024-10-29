package example.nexacro.uiadapter.mapper;

import example.nexacro.uiadapter.pojo.CmmBtn;
import example.nexacro.uiadapter.pojo.ComCode;
import example.nexacro.uiadapter.pojo.ComMenu;

import java.util.List;

/**
 * <pre>
 * @title   
 * @desc    아래의 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * -        
 * @package com.nexacro.sample.uiadapter.spring.mapper
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
public interface UiFrameMapper {

	public List<ComMenu> selectMenuList();
	public void insertMenuList(ComMenu comMenu);
	public void updateMenuList(ComMenu comMenu);
	public void deleteMenuList(ComMenu comMenu);

	public List<CmmBtn> selectCmmBtnList(CmmBtn cmmBtn);
	public void insertCmmBtnList(CmmBtn cmmBtn);
	public void updateCmmBtnList(CmmBtn cmmBtn);
	public void deleteCmmBtnList(CmmBtn cmmBtn);

	public List<ComCode> selectComCodeList(ComCode comCode);
	public List<ComCode> selectComCodeDetailList(ComCode comCode);
	public void insertComCodeList(ComCode comCode);
	public void updateComCodeList(ComCode comCode);
	public void deleteComCodeList(ComCode comCode);

}
