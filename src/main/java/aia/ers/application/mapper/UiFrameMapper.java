package aia.ers.application.mapper;

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
 * @package com.nexacro.sample.uiadapter.spring.mapper
 * <pre>
 * 
 * @author  송원창
 * @since   2024. 10. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2024. 10. 18.	송원창		최초작성
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
