/**
*  AIA 비용관리시스템
*  @FileName 	Frame.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Frame Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/* 메뉴정보 칼럼 변수*/
pForm.FRAME_MENUCOLUMNS = 
{
	sytmFlagCd		: "SYTM_FLAG_CD",    	// 시스템구분코드
	menuId 			: "menuId",    		// 아이디
	menuNm 			: "menuNm",			// 명칭
	groupId			: "MODULE_CD",			// 메뉴그룹 아이디
	prgmId 			: "prgmId",			// 프로그램 아이디
	prgmPath		: "PRGM_PATH",			// 프로그램 경로(서비스그룹명)
	prgmFileNm		: "PRGM_FILE_NM",		// 프로그램 파일명
	prgmHelpFlag	: "PRGM_HELP_FLAG",		// 프로그램 매뉴얼 작성 여부
	prgmNm			: "PRGM_NM",			// 프로그램 이름
	menuUrl 		: "prgPath",			// 프로그램 URL(서비스그룹명 + "::" + 파일명)
	menuLevel 		: "menuLvl",     		// 메뉴레벨	
    upMenuId    	: "HIPO_MENU_ID",		// 상위메뉴 아이디
	//leafYn 		: "LEAF_YN",			// 마지막 노드 여부
	//useYn			: "USED_YN",			// 사용여부
	searchBtnYn     : "CMMNBTNSEARCH",      // 공통조회버튼 사용여부 
	addBtnYn		: "CMMNBTNADD",			// 공통추가버튼 사용여부 
	delBtnYn		: "CMMNBTNDEL",			// 공통삭제버튼 사용여부
	saveBtnYn		: "CMMNBTNSAVE",		// 공통저장버튼 사용여부
	printBtnYn		: "CMMNBTNPRINT",		// 공통출력버튼 사용여부
	excelBtnYn	    : "CMMNBTNEXCELDOWN",	// 공통엑셀버튼 사용여부
	initbtinYn		: "CMMNBTNINIT",        // 공통초기화버튼 사용여부
	//excelUpBtnYn	: "cmmnBtnExcelUp",		// 공통엑셀업로드버튼 사용여부
	//helpBtnYn		: "cmmnBtnHelp",		// 공통도움말버튼 사용여부
	winId 			: "winId",      		// 윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
	title 			: "menuNm",				// 메뉴타이틀
	param			: "PARM",
	displayPath     : "displayPath"
};

/************************************************************************************************
* Frame 제어 관련
************************************************************************************************/
/**
* @class Profile을 반환하는 메소드
* @param  none
* @return {String} 실행환경 구분(S:NexacroStudio, L:로컬(웹), R:운영(웹), D:개발)
* @example this.gfnGetRunMode();
*/ 
pForm.gfnGetRunMode = function()
{
	return nexacro.getApplication().gvRunMode;
}

/**
* @class Nexacro browser 여부 확인
* @return {Boolean} Nexacro browser 여부
* @example this.gfnIsNexaBrowser();
*/ 
pForm.gfnIsNexaBrowser = function()
{
	return (system.navigatorname == "nexacro");
}

/**
* @class 모바일여부반환
* @param  none
* @return "1"/"0"
* @example this.gfnIsMobile();
*/
pForm.gfnIsMobile = function ()
{
	var uA = ((nexacro._isMobile && nexacro._isMobile()) || (nexacro._isHybrid && nexacro._isHybrid()) || (!nexacro._isDesktop() && nexacro._OS == "Android" && nexacro._Browser == "Runtime"))
	if(uA==true||uA=="true")
	{
		return "1";
	}
	else
	{
		return "0";
	}
};

/**
* @class 실행한 서버 경로 전달 <br>
* @param none
* @return String - 실행한 서버 경로
* @example this.gfnGetServerUrl();
*/
pForm.gfnGetServerUrl = function()
{
	var urlPath = "";
    if(system.navigatorname == "nexacro")
	{
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["svcUrl"].url;
	} 
	else
	{
		urlPath = window.location.protocol + "//" + window.location.host;
		urlPath+="/";
	}

	return urlPath;
};

/**
* @class 로그인 처리
* @param  none
* @return N/A
* @example this.gfnSetLogin();
*/ 
pForm.gfnSetLogin = function()
{
	var objApp = nexacro.getApplication();

	objApp.gvCloseCheck = true;

	// URL 연결
	//objApp.gvFrmTop.set_formurl(objApp._TOP_FORM_PATH);
	objApp.gvFrmLeft.set_formurl(objApp._LEFT_FORM_PATH);
	objApp.gvFrmMdi.set_formurl(objApp._MDI_FORM_PATH);
	objApp.gvFrmBottom.set_formurl(objApp._BOTTOM_FORM_PATH);

	// LogIn Frame Form Url Initiate
	objApp.gvFrmLogin.set_formurl("");

	// 메인화면셋팅
	this.gfnSetMain(true);			
};

/**
* @class  메인화면으로 이동
* @param  {Boolean} bInit - Application 시작인지 여부(시작인 경우에는 각 화면 초기화 안함.)
* @return N/A
* @example this.gfnSetMain();
*/ 
pForm.gfnSetMain = function(bInit)
{
	if(this.gfnIsNull(bInit))
	{
		bInit = false;
	}
	
	var objApp = nexacro.getApplication();
	
	objApp.gvFrameStat	= "main";
	
	// Layout
	objApp.gvVFS.set_separatesize("0,43,*");
	
	// Mdi Frame 위치 설정(top || bottom)
	if(objApp.gvMdiFramePos == "top")
	{
		objApp.gvVFS1.set_separatesize("*,0,0");
	}
	else if(objApp.gvMdiFramePos == "bottom")
	{
		objApp.gvVFS1.set_separatesize("0,*,0,43");
	}
 	if(bInit == false)
	{
 		objApp.gvFrmMdi.form.fnSetStyle("main");
 	}
	if(this.gfnIsNull(objApp.gvFrmMain.formurl))
	{
		objApp.gvFrmMain.set_formurl(objApp._MAIN_FORM_PATH);
	}
	objApp.gvFrmMain.form.setFocus();
};

/**
* @class  서브화면으로 이동
* @param  none
* @return N/A
* @example this.gfnSetSub();
*/ 
pForm.gfnSetSub = function()
{
	var objApp = nexacro.getApplication();
	
	objApp.gvFrameStat	= "sub";
	
	// Mdi Frame 위치 설정(top || bottom)
	if (objApp.gvMdiFramePos == "top")
	{
		objApp.gvVFS1.set_separatesize("0,*,23");
	}
	else if(objApp.gvMdiFramePos == "bottom")
	{
		objApp.gvVFS1.set_separatesize("0,0,*,43");
	}

 	objApp.gvFrmMdi.form.fnSetStyle("sub");

	//objApp.gvFrmMain.set_formurl("");
};

/**
* @class  Login화면으로 이동(로그아웃처리) 
* @param  none
* @return N/A
* @example this.gfnGoLogin();
*/ 
pForm.gfnGoLogin = function()
{
	var objApp = nexacro.getApplication();

	if(objApp.gvFrameStat == "login")		return;

	if(system.navigatorname == "nexacro") 
	{
		objApp.gvFrameStat	= "login";

		// 닫을때 체크안함.
		objApp.gvCloseCheck = false;

		// 폼닫기
		try {
			objApp.gvFrmMdi.form.fnCloseAll(false);
		} catch(e){}

		// URL 초기화
		objApp.gvFrmTop.set_formurl("");
		objApp.gvFrmLeft.set_formurl("");
		objApp.gvFrmMdi.set_formurl("");
		objApp.gvFrmMain.set_formurl("");
		objApp.gvFrmLogin.set_formurl(objApp._LOGIN_FORM_PATH);

		objApp.gvVFS.set_separatesize("*,0,0");
		objApp.gvHFS.set_separatesize("0,*");
 	}
	else
	{
 		window.top.location.reload(true);
 	}
};

/**
* @class  좌측 Frame을 보여준다.
* @param  none
* @return N/A
* @example this.gfnShowLeftFrame();
*/  
pForm.gfnShowLeftFrame = function ()
{
	var objApp = nexacro.getApplication();

	objApp.gvHFS.set_separatesize("363,*");
	objApp.gvFrmMdi.form.btnLeftMenuShowHide.cssclass = "btn_LF_Close";
	objApp.gvFrmLeft.form.fvMenuStatus = "open";
	objApp.gvFrmLeft.form.fnMenuVisible();
	
};

/**
* @class  좌측 Frame을 숨긴다.
* @param  none
* @return N/A
* @example this.gfnHideLeftFrame();
*/  
pForm.gfnHideLeftFrame = function ()
{
	var objApp = nexacro.getApplication();

	objApp.gvHFS.set_separatesize("58,*");
	objApp.gvFrmMdi.form.btnLeftMenuShowHide.cssclass = "btn_LF_Open";
	objApp.gvFrmLeft.form.fvMenuStatus = "close";
	objApp.gvFrmLeft.form.fnMenuVisible();
};

/**
* @class  메뉴오픈 (frame open) 
* @param {String} sMenuId : 화면ID
* @param {Object} bjParam : 화면에 넘길 파라미터 Object 
* @param {Boolean} bReload	: 화면을 리로드 할지 여부
* @return {Boolean} 화면오픈 성공여부
* @example this.gfnOpenMenu(sMenuId, objParam);
*/
pForm.gfnOpenMenu = function(sMenuId, objParam, bReload)
{
	var bReturn = false;

	// 팝업에서 부모쪽 제어할때 IE에서 느려지는 제약사항이 있어서 함수 호출 분리함. 
	if (this.gfnIsNull(this.getOwnerFrame().form.opener))
	{
		bReturn = this._gfnOpenMenu(sMenuId, objParam, bReload);
	}
	else
	{
		bReturn = nexacro.getApplication().gvFrmLeft.form._gfnOpenMenu(sMenuId, objParam, bReload);
	}

	return bReturn;
};

/**
* @class _gfnOpenMenu (frame open) [내부함수]
* @param {String} sMenuId : 화면ID
* @param {Object} bjParam : 화면에 넘길 파라미터 Object 
* @param {Boolean} bReload	: 화면을 리로드 할지 여부
* @return {Boolean} 화면오픈 성공여부
* @example this._gfnOpenMenu(sMenuId, objParam);
*/
pForm._gfnOpenMenu  = function(sMenuId, objParam, bReload)
{
	// Null Check
	if (this.gfnIsNull(sMenuId))
	{
		this.gfnAlert("msg.nomenu");
		return false;
	}

	var objApp = nexacro.getApplication();

	if(this.gfnIsNull(bReload)) bReload = true;

	var nRow = objApp.gdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sMenuId);
	var sMenuUrl = objApp.gdsMenu.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuUrl);
	var sWinId = objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.winId);
	var sMenuNm	= objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.title);

	var objForm = objApp.gvFrsWork.all[sWinId];

	// 기존에 오픈된 화면이 있는 경우 처리
	if (objForm != null)
	{
		// 리로드(화면에서 오픈)
		if(bReload == true)
		{
			// 변경된 데이터가 있는 경우 confirm, 그외는 그냥 reload
			if(!this.gfnIsNull(objForm.form.fnWorkFrameClose) && objForm.form.fnWorkFrameClose() == false) 
			{
				// 변경된 데이터가 있습니다. 화면을 다시 여시겠습니까?
				this.gfnAlert("confirm.before.reopen", null, "confirm.before.reopen", function(sId, sVal)
				{
					if(sVal)
					{
						objForm.arguments["menuId"] 	= sMenuId;
						objForm.arguments["menuParam"] 	= objParam;
						objForm.arguments["menuUrl"] 	= sMenuUrl;
						objApp.gvFrmMdi.form.isActiveFrame(sWinId);
						objForm.form.reload();
						return;
					}
					else
					{
						objApp.gvFrmMdi.form.isActiveFrame(sWinId);
					}
				});
			}
			else
			{
				objForm.arguments["menuId"] 	= sMenuId;
				objForm.arguments["menuParam"] 	= objParam;
				objForm.arguments["menuUrl"] 	= sMenuUrl;
				objApp.gvFrmMdi.form.isActiveFrame(sWinId);
				objForm.form.reload();
			}
		// 리로드 안함(left메뉴쪽에서 클릭)
		}
		else
		{				
			objApp.gvFrmMdi.form.isActiveFrame(sWinId);
			//hj	20220525	열려있는 화면에 파라미터 전달 및 호출
			if(this.gfnIsNotEmpty2(objParam))
			{
				objForm.arguments["menuParam"] 	= objParam;
				var workForm = objForm.form.fvDivWork.form;
				if(this.gfnIsFunction(workForm["fnOpenMenuAction"]))
				{
					workForm.lookupFunc("fnOpenMenuAction").call(objParam);
				}
			}
		}
		return;
	}

	var sMenuUrl	= objApp.gdsMenu.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuUrl);
	var sMenuNm		= objApp.gdsMenu.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);

	if(this.gfnIsNull(sMenuUrl)) 	return;
	if(this.gfnIsNull(sMenuNm)) 	return;

	if(objApp.gdsOpenMenu.rowcount >= objApp.gvOpenMaxFrame)
	{
		// 팝업 호출
		this.gfnAlert("msg.err.mdicount.max", [objApp.gvOpenMaxFrame], "msg.err.mdicount.max", null);

		return false;
	}
	else
	{
		this.gfnNewMdi(objApp.gdsMenu, nRow, objParam, bReload);
	}

	return true;
};

/**
* @class gds_menu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
* @param {Object} objDs - 메뉴 dataset
* @param {Number} nRow - gds_menu의rowpostion
* @param  {Object} objParam - 화면에 넘길 파라미터 Object 
* @param {Boolean} bReload	- 화면을 리로드 할지 여부(디폴트 : false)
* @return N/A
* @example this.gfnNewMdi(this.gdsMenu, nRow, objParam, false);
*/
pForm.gfnNewMdi = function(objDs, nRow, objParam, bReload)
{
	var objApp = nexacro.getApplication();
	var objGdsOpenMenu = objApp.gdsOpenMenu;		// 열린 dataset

	var sMenuId			= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);
	var sMenuUrl		= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuUrl);
	//var sGroupId		= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.groupId);
	var sPrgmId 		= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.prgmId);
	var sMenuNm  		= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);
	var sPath 			= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.displayPath);//this._gfnGetMenuNavi(objDs, nRow);
	var sParam   	    = objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.param);
	var sPrgmHelpFlag	= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.prgmHelpFlag);
	var sPrgmNm			= objDs.getColumn(nRow, this.FRAME_MENUCOLUMNS.prgmNm);

	//if(this.gfnIsNull(sGroupId)) return;		// Group 아이디 없으면 return
	if(this.gfnIsNull(sMenuUrl)) return;		// MenuUrl 이 없으면 return

	var sWinId = "FRAMEWORK_" + "_" + objGdsOpenMenu.getRowCount() + "_" + parseInt(Math.random() * 100000);

	this.gfnSetOpenMenuDs(sWinId, sMenuId, sMenuNm, sMenuUrl, sPrgmId);		// 열린메뉴 화면 삽입

	var objNewWin = new ChildFrame();

	objNewWin.init(sWinId, 0, 0, objApp.gvFrsWork.getOffsetWidth() - 0, objApp.gvFrsWork.getOffsetHeight() - 0, null, null);
	objApp.gvFrsWork.addChild(sWinId, objNewWin);

	//objNewWin.set_tooltiptext(sWinId);
	objNewWin.arguments = [];
	objNewWin.set_showtitlebar(false);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_showcascadetitletext(false);

	objNewWin.arguments[this.FRAME_MENUCOLUMNS.winId] 			= sWinId;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.menuId] 			= sMenuId;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.menuNm] 			= sMenuNm;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.menuUrl] 		= sMenuUrl;
	//objNewWin.arguments[this.FRAME_MENUCOLUMNS.groupId] 		= sGroupId;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.prgmId] 			= sPrgmId;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.param] 			= sParam;
	objNewWin.arguments["menuParam"] 							= objParam;	
	objNewWin.arguments["menuNavi"] 							= sPath;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.prgmHelpFlag]	= sPrgmHelpFlag;
	objNewWin.arguments[this.FRAME_MENUCOLUMNS.prgmNm]			= sPrgmNm;

	objNewWin.set_formurl("frame::frameWork.xfdl");

	objApp.gvFrmMdi.form.fnAddTab(sWinId, sMenuNm);   //mdi tab button add
	objApp.gvFrmMdi.form.isActiveFrame(sWinId);

	objNewWin.show();
};

/**
* @class 열린화면 데이터셋에 추가 <br>
* @param {String} sWinId : childframe key
* @param {String} sMenuid : 메뉴ID
* @param {String} sTitle : 화면명
* @param {String} sMenuUrl : 화면 URL
* @param {String} sPrgmId : 프로그램ID
* @return N/A
* @example this.gfnSetOpenMenuDs(sWinId, sMenuId, sMenuNm, sMenuUrl, sPrgmId);	
*/
pForm.gfnSetOpenMenuDs = function(sWinId, sMenuid, sTitle, sMenuUrl, sPrgmId)
{
	var objApp  = nexacro.getApplication();
	var objGdsOpenMenu = objApp.gdsOpenMenu ;  //열린 dataset

	var nRow = objGdsOpenMenu.addRow();

	objGdsOpenMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.winId, sWinId);
	objGdsOpenMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuId, sMenuid);
	objGdsOpenMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.title, sTitle);
	objGdsOpenMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuUrl, sMenuUrl);
	//objGdsOpenMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.groupId, sGroupId);
	objGdsOpenMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.prgmId, sPrgmId);
};

/**
* @class gdsMenu의 해당 Row의 메뉴 상세 경로를 구함. <br>
* @param {Object} objDs - 메뉴 dataset
* @param {Number} nRow - gdsMenu의 rowposition
* @return N/A
* @example this._gfnGetMenuNavi(objDs, nRow);
*/
pForm._gfnGetMenuNavi = function(objGdsMenu, nRow)
{
	var objApp = nexacro.getApplication();

	var sMenuNm = objGdsMenu.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);
	var sUpperMenuId = objGdsMenu.getColumn(nRow, this.FRAME_MENUCOLUMNS.upMenuId);
	var nUpMenuRow = objGdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sUpperMenuId);
	var sUpMenuNm = objGdsMenu.getColumn(nUpMenuRow, this.FRAME_MENUCOLUMNS.menuNm);

	sPath = "<fc v='#000000'>" + sMenuNm + "</fc>";

	while(1)
	{	
		nUpMenuRow  = objGdsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sUpperMenuId);
		if(nUpMenuRow > -1 )
		{
			sPath = objGdsMenu.getColumn(nUpMenuRow, this.FRAME_MENUCOLUMNS.menuNm) + " > " + sPath;
		}
		sUpperMenuId = objGdsMenu.getColumn(nUpMenuRow, this.FRAME_MENUCOLUMNS.upMenuId);
		if(this.gfnIsNull(sUpperMenuId))
		{
			break;
		}
	}

	return sPath;
}

/**
* @class 열린메뉴 데이터셋에 삭제 <br>
* @param {String} sWinId : ChildFrame의 윈도우ID
* @return N/A
* @example this.gfnRemoveOpenMenuDs(sWinId);
*/
pForm.gfnRemoveOpenMenuDs = function(sWinId)
{
	var objApp = nexacro.getApplication();
	var nRow = objApp.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId, sWinId);
	objApp.gdsOpenMenu.deleteRow(nRow);
};

/**
* @class 화면에 설정된 파라미터객체 반환
* @param {String} sName : 파라미터 id
* @return {String} 파라미터값
* @example this.gfnGetArgument("param");
*/
pForm.gfnGetArgument = function(sName)
{
	var ret;

	if (this.gfnIsNull(sName))
	{
		ret = this.getOwnerFrame().arguments["menuParam"];
	}
	else
	{
		ret = this.getOwnerFrame().arguments[sName];
	}

	return ret;
};

/**
* @class Url을 변경하고 전달할 Argument를 설정 <br>
* @param {String} sUrl - 화면 
* @param {Object} objArg - 전달할 Argument
* @param {Object} objTarget - 전환하려는 Object
* @return N/A
* @example this.gfnSetUrl("sample::sampleMessage.xfdl", {aaa:"abc", num:123});
*/
pForm.gfnSetUrl = function (sUrl, objArg, objTarget)
{
	var objFrame = this.getOwnerFrame();

	// Argument 설정
	//objFrame.objArg =  objArg;
	objFrame.arguments["menuParam"] = objArg;

	// 팝업 일때
	if(this.opener)
	{
		objFrame.set_autosize(true);
		objFrame.set_formurl("");
		objFrame.set_formurl(sUrl);
	// 화면 일때
	}
	else
	{
		// QuikView 일때 처리
		if(nexacro.getEnvironmentVariable("evQuikView") == "Y")
		{
			if(objTarget)
			{
				objTarget.set_url("");
				objTarget.set_url(sUrl);
			}
			else
			{
				objFrame.set_formurl("");
				objFrame.set_formurl(sUrl);
			}
		}
		else
		{
			if(objTarget)
			{
				objTarget.set_url("");
				objTarget.set_url(sUrl);
			}
			else
			{
				var objTarget = this.parent;
				
				objTarget.set_url("");
				objTarget.set_url(sUrl);
			}
		}
	}
};

/**
* @class  업무영역 최대화
* @param {String} status - 화면 사이즈
* @return N/A
* @example this.gfnSetWorkMode("normal");
*/
pForm.gfnSetWorkMode = function (status)
{
	var objApp = nexacro.getApplication();
	
	if(this.gfnIsNull(objApp.gvVFS.status)) objApp.gvVFS.status = "0,50,*";
	if(this.gfnIsNull(objApp.gvHFS.status)) objApp.gvHFS.status = "363,*";
	if(this.gfnIsNull(objApp.gvVFS1.status)) objApp.gvVFS1.status = "43,0,*,0";
	
	if(status == "normal")
	{
		objApp.gvVFS.set_separatesize(objApp.gvVFS.status);
		objApp.gvHFS.set_separatesize(objApp.gvHFS.status);
		objApp.gvVFS1.set_separatesize(objApp.gvVFS1.status);
		//objApp.gvFrmMdi.form.btnLeftMenuShowHide.set_cssclass("btn_MDI_Close");
		objApp.gvFrmLeft.form.fvMenuStatus = "close";
	}
	else if( status =="max")
	{
		objApp.gvVFS.status = objApp.gvVFS.separatesize;
		objApp.gvHFS.status = objApp.gvHFS.separatesize;
		objApp.gvVFS1.status = objApp.gvVFS1.separatesize;

		objApp.gvVFS.set_separatesize("0,0,*");
		objApp.gvHFS.set_separatesize("0,*");
		objApp.gvVFS1.set_separatesize("0,*,0,0");
		//objApp.gvFrmMdi.form.btnLeftMenuShowHide.set_cssclass("btn_MDI_Open");
		objApp.gvFrmLeft.form.fvMenuStatus = "open";
	}
};

// /************************************************************************************************
// * Form 제어 관련
// ************************************************************************************************/
/**
* @class form open 시 초기 처리 <br>
* @param {Object} objForm - Form 객체
* @return N/A
* @example this.gfnFormOnLoad(objForm);
*/ 
pForm.gfnFormOnload = function (objForm)
{
	var objApp = nexacro.getApplication();
	
	// 워크영역 스크롤 삭제
// 	if(objForm.parent.name === "divWork")
// 	{
// 		var layoutHeight = nexacro._getLayoutManager().getLayout(objForm).height;
// 		var layoutWidth  = nexacro._getLayoutManager().getLayout(objForm).width;
// 		
// 		if(layoutHeight > objForm.parent._minheight)
// 		{
// 			objForm.parent.set_height(layoutHeight+20);
// 		}
// 		if(layoutWidth > objForm.parent._minwidth)
// 		{
// 			//objForm.parent.set_width(layoutWidth+20);
// 		}
// 		objForm.parent.parent.resetScroll();
// 	}
	
	// 부모가 divWork일때(업무화면일때) keyDown 이벤트 추가 및 화면 loading 시간 측정
	if(objForm.parent.name === "divWork")
	{
		var objApp = nexacro.getApplication();
		
		// 키다운 이벤트 추가
		objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
	}

	// 팝업 일때 처리
	if(objForm.opener)
	{
		if(objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이베트 추가
			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
		}
	}

	// QuikView 일때 처리
	if(nexacro.getEnvironmentVariable("evQuickView") == "Y")
	{
		if(this.gfnIsNull(objForm.opener) && objForm.parent instanceof nexacro.ChildFrame)
		{
			// 키다운 이벤트 추가
			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
		}
	}
	
	//그리드 우클릭 메뉴가 있을때 form 에 스크롤이벤트 발생시
	objForm.addEventHandler("onmousewheel", this.gfnOnmousewheel, this);	
	
	// Component 초기화 처리
	this.gfnInitComp(objForm);
	
	// 조회영역 focus 처리, 엔터시 자동조회, 조회버튼 권한 제어
// 	var oDiv = objForm.components["divSearch"];
// 	if (!this.gfnIsNull(oDiv)) {
// 		// 조회영역에 focus 처리
// 		oDiv.setFocus();
// 		
// 		// 엔터시 자동조회
// 		this.gfnSearchCondInint(oDiv);
// 		
// 		// 조회권한 없을때 조회버튼 비활성화
//  		var oSearch = oDiv.form.components["btnSearch"];
//  		if (!this.gfnIsNull(oSearch)) {
//  			if (!this.gfnGetAuth("Search")) {
//  				//oSearch.set_enable(false);
//  			}
//  		}
// 	}
};

/**
* @class form open 시 Component 초기화 처리 <br>
* @param {Object} objForm - 화면
* @return N/A
* @example this.gfnInitComp(this);
*/
pForm.gfnInitComp = function(objForm)
{
	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for(var i = 0; i < nLength; i++)
	{
		if(arrComp[i] instanceof nexacro.Div)
		{
			//URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if(this.gfnIsNull(arrComp[i].url)) this.gfnInitComp(arrComp[i].form);
		} 
		else if(arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;
			
			for(var j = 0; j < nPages; j++)
			{	
				//URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfnIsNull(arrComp[i].tabpages[j].url)) this.gfnInitComp(arrComp[i].tabpages[j].form);
			}
		} 
		else
		{
			//Grid 처리
			if(arrComp[i] instanceof nexacro.Grid)
			{
				this.gfnSetGrid(arrComp[i]);
			}
		}
	}
};

/**
* @class  각 화면에 키다운 이벤트에 사용하는 함수
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
*/
pForm.gfnOnkeydown = function(obj, e)
{	
	// 디버그 창 : Ctrl + Alt + Q
	if(e.ctrlkey && e.altkey && e.keycode == 81)
	{
		// 운영환경에서는 실행 방지
		if (this.gfnGetRunMode() == "R") return;
		
		var objArg = {};
		var objOption = {width:"1000", height:"700", popuptype:"modeless", titlebar:true, title:"디버그", resize:true};
		
		this.gfnOpenPopup("popupDebug", "common::cmmDebug.xfdl", objArg, "", objOption);
		
		return true;
	}
};

/**
* @class 스크롤이벤트 발생시 그리드 우클릭메뉴가 open되어 있으면 close 하는 처리
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example objForm.addEventHandler("onmousewheel", this.gfnOnmousewheel, this);
*/
pForm.gfnOnmousewheel = function(obj, e)
{
	//open된 우클릭popupMenu close
	if (!this.gfnIsNull(this.OPEN_SEL_POPMENU))
	{	
		var pdiv = this.components[this.OPEN_SEL_POPMENU.name];
		if(pdiv.isPopup())
		{
			pdiv.closePopup();
			return;
		}
	}
};

/**
* @class 조회영역에 키업이벤트 추가 <br>
* @param {Object} oDiv - 조회Div
* @return N/A
* @example this.gfnSearchCondInint(oDiv);
*/
pForm.gfnSearchCondInint = function (oDiv)
{
	var arrComp = oDiv.form.components;
	for( var i=0; i<arrComp.length; i++)
	{
		if(arrComp[i] instanceof nexacro.Edit || arrComp[i] instanceof nexacro.Combo
			|| arrComp[i] instanceof nexacro.MaskEdit || arrComp[i] instanceof nexacro.Calendar)
			{
			if(arrComp[i].uUse != "false")
			{
				arrComp[i].addEventHandler("onkeyup", this.gfnSearchCond_onkeyup, this);
			}
		}
	}
};

/**
* @class 조회영역 키업이벤트에서 사용하는 함수  <br>
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example arrComp[i].addEventHandler("onkeyup", this.gfnSearchCond_onkeyup, this);
*/
pForm.gfnSearchCond_onkeyup = function (obj, e)
{
	if(e.keycode == 13)
	{
		var sFunc = "cfnSearch";
		if(this.gfnGetAuth("Search"))
		{
			if (this[sFunc]) this.lookupFunc(sFunc).call();
		}
	}
};

//----------------------------------------------------------------------------------
// 권한 처리 
//----------------------------------------------------------------------------------

/**
* @class gdsMenu에서 버튼권한 가져오기
* @param {String} sMenuId: 메뉴Id
* @return N/A
* @example this.gfnGetAuthButton(sMenuId)
*/
pForm.gfnGetAuthButton = function(sMenuId)
{   
	var objApp = nexacro.getApplication();
	
	var sSearch 	= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.searchBtnYn)=="1"?"1":"0";
	var sAdd 		= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.addBtnYn)=="1"?"1":"0";
	var sDelete 	= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.delBtnYn)=="1"?"1":"0";
	var sSave 		= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.saveBtnYn)=="1"?"1":"0";
	var sPrint 		= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.printBtnYn)=="1"?"1":"0";
	var sExcel   	= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.excelBtnYn)=="1"?"1":"0";
	var sInit   	= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.excelBtnYn)=="1"?"1":"0";

	var sValue = sSearch + sAdd + sDelete + sSave + sPrint + sExcel + sInit;

	return sValue;	
};

/**
* @class  현재 화면의 버튼권한 가져오기
* @param  {String} sAuthGubn: 권한
* @return {String}
* @example this.gfnGetAuth("Add")
*/
pForm.gfnGetAuth = function(sAuthGubn)
{
	var sButtonAuth = "";
	if(this.gfnIsNull(this.opener))
	{
		sButtonAuth = this.getOwnerFrame().form.fvButtonAuth;
	}
	else
	{
        var p = this.parent;
        while (p) 
		{
			if (!this.gfnIsNull(p.form.fvButtonAuth) || p.form.name == "frameWork" )
			{
				sButtonAuth = p.form.fvButtonAuth;
				break;
			}
            p = p.parent;
        }
	}
	if(this.gfnIsNull(sButtonAuth)) sButtonAuth = "0000000";

	if(this.gfnIsNull(sAuthGubn))
	{
		return sButtonAuth;
	}

	// 공통버튼별 권한
	var sSearch = sButtonAuth[0];	// 조회
	var sAdd 	= sButtonAuth[1];	// 추가
	var sDel 	= sButtonAuth[2];	// 삭제
	var sSave 	= sButtonAuth[3];	// 저장
	var sPrint 	= sButtonAuth[4];	// 출력
	var sExcel  = sButtonAuth[5];	// 엑셀
	var sInit 	= sButtonAuth[6];	// 초기화

	var bAuth = false;
	switch(sAuthGubn) 
	{
		case "Search":
			bAuth = (sSearch=="1" ? true : false);
			break;
		case "Add":
			bAuth = (sAdd=="1" ? true : false);
			break;
		case "Del":
			bAuth = (sDel=="1" ? true : false);
			break;
		case "Save":
			bAuth = (sSave=="1" ? true : false);
			break;
		case "Print":
			bAuth = (sPrint=="1" ? true : false);
			break;
		case "Excel":
			bAuth = (sExcel=="1" ? true : false);
			break;
		case "Init":
			bAuth = (sInit=="1" ? true : false);
			break;
		default:
			bAuth = false;
			break;
	}

	return bAuth;
};

/**
* @class  공통모듈버튼 셋팅 <br>
* @param  {Object} objDiv - 공통모듈버튼 셋팅할 DIV
* @return N/A
* @example this.gfnSetCommBtn(this.divCommBtn1, this.divCommBtn2);
*/
pForm.gfnSetCommBtn = function()
{
	// 권한없을때 버튼을 보이게 할지 여부
	var bButtonVisable = true;

	var objApp = nexacro.getApplication();
	var objDs  = objApp.gdsCmmnBtn;

	var sButtonAuth = this.gfnGetAuth();
	if(this.gfnIsNull(sButtonAuth)) sButtonAuth = "0000000";

	// 공통버튼별 권한
	var sSearch = sButtonAuth[0];	// 조회
	var sAdd 	= sButtonAuth[1];	// 추가
	var sDel 	= sButtonAuth[2];	// 삭제
	var sSave 	= sButtonAuth[3];	// 저장
	var sPrint 	= sButtonAuth[4];	// 출력
	var sExcel  = sButtonAuth[5];	// 엑셀
	var sInit 	= sButtonAuth[6];	// 초기화

	// Div 목록
	for(var m = 0; m < arguments.length; m++)
	{
		// Div 여부 체크
		if(!(arguments[m] instanceof Div))
		{
			this.gfnLog("gfnSetCommBtn함수에 Parameter로 전달된 Div이 없습니다. [" + (m+1) + "번째]");
			return;
		}

		var objForm = arguments[m].form;
		var arrComp = objForm.components;
		var nLength = arrComp.length;
		var bPreVisible = true;

		objDs.clearData();
		objDs.set_enableevent(false);
		for(var i = 0; i < nLength; i++)
		{		
			var sCompName = arrComp[i].name;

			var nRow = objDs.addRow();
			objDs.setColumn(nRow, "component", sCompName);
			objDs.setColumn(nRow, "right", arrComp[i].getOffsetRight());	// arrComp[i].getOffsetRight() or right
			objDs.setColumn(nRow, "width", arrComp[i].getOffsetWidth());

			bPreVisible = arrComp[i].visible;

			// 권한 체크
			var bVisible = false;
			if (sCompName.indexOf("btn") >- 1)
			{
				// 3자리만 비교
				var sAuthGubn = sCompName.substr(3,3);
				switch(sAuthGubn)
				{
					//Search
					case "Sea":
						bVisible = (sSearch=="1" ? true : false);
						break;
					//Add
					case "Add":
						bVisible = (sAdd=="1" ? true : false);
						break;
					//Del
					case "Del":
						bVisible = (sDel=="1" ? true : false);
						break;
					//Save
					case "Sav":
						bVisible = (sSave=="1" ? true : false);
						break;
					//Print
					case "Pri":
						bVisible = (sPrint=="1" ? true : false);
						break;
					//Excel
					case "Exc":
						bVisible = (sExcel=="1" ? true : false);
						break;
					//Init
					case "Ini":
						bVisible = (sInit=="1" ? true : false);
						break;
					default:
						bVisible = true;
						break;
				}
				// 원래 안보이는 버튼은 안보이게 처리
				if (bPreVisible == false)
				{
					bVisible = bPreVisible;
				}
			}
			else
			{
					bVisible = arrComp[i].visible;
			}

			// 권한없을때 버튼을 보이게 할지 여부
			if(!bButtonVisable)
			{
				objDs.setColumn(nRow, "visible", bVisible);
				arrComp[i].set_visible(bVisible);
			}
			else
			{
				arrComp[i].set_enable(bVisible);
			}
		}

		// 권한없을때 버튼을 보이게 할지 여부
		if(!bButtonVisable)
		{
			objDs.set_enableevent(true);
			objDs.set_keystring("S:-right");
			objDs.set_filterstr("");
			objDs.set_filterstr("visible=='true'");

			var nRight = 0;
			var nGap   = 5;    // 버튼사이 간격
			var nCnt   = objDs.rowcount;

			for(var j=0; j < nCnt; j++) 
			{
				var objComp = objForm.components[objDs.getColumn(j, "component")];

				objComp.move(null, 0, objComp.getOffsetWidth(), objComp.getOffsetHeight(), nRight);
				nRight = nRight + nGap + nexacro.toNumber(objComp.getOffsetWidth());
			}
		}
	}
};

/**
* @class  공통버튼에서 확장 버튼 추가 하기
* @param  {Array} 버튼정보
* @example this.gfnAddExtendBtn([])
*/
pForm.gfnAddExtendBtn = function(v)
{
	this.getOwnerFrame().form.divTitle.form.fnAddExtendBtn(v);
	this.getOwnerFrame().form.divTitle.form.fnExtendBtnSort();
};

/**
* @class  공통버튼에서 확장 버튼 삭제 하기
* @param  {String} 버튼 id 목록
* @example this.gfnAddExtendBtn(btnList)
*/
pForm.gfnDeleteExtendBtn = function(v)
{
	this.getOwnerFrame().form.divTitle.form.fnDeleteExtendBtn(v);
	this.getOwnerFrame().form.divTitle.form.fnExtendBtnSort();
};

/**
* @class  공통버튼에서 확장 버튼 Enable
* @param  {String} 버튼 id 목록
* @param  {boolean} true, false
* @example this.gfnEnableExtendBtn(btnList, true)
*/
pForm.gfnEnableExtendBtn = function(v1, v2)
{
	this.getOwnerFrame().form.divTitle.form.fnEnableExtendBtn(v1, v2);
};

/**
* @class  공통버튼에서 확장 버튼 visible
* @param  {String} 버튼 id 목록
* @param  {boolean} true, false
* @example this.gfnVisibleExtendBtn(btnList, true)
*/
pForm.gfnVisibleExtendBtn = function(v1, v2)
{
	this.getOwnerFrame().form.divTitle.form.fnVisibleExtendBtn(v1, v2);
	this.getOwnerFrame().form.divTitle.form.fnExtendBtnSort();
};

/**
* @class  공통버튼에서 확장 버튼 Enable
* @param  {String} btn
* @example this.gfnEnableCmmBtn("1111111")
*/
pForm.gfnEnableCmmBtn = function(v)
{
	this.getOwnerFrame().form.divTitle.form.fnEnableCmmBtn(v);
};

/**
* @class  공통버튼에서 확장 버튼 Enable
* @param  {String} 0:false, 1:true
* @example this.gfnEnableCmmBtn("1111111")
*/
pForm.gfnVisibleCmmBtn = function(v)
{
	this.getOwnerFrame().form.divTitle.form.fnVisibleCmmBtn(v);
	this.getOwnerFrame().form.divTitle.form.fnCmmBtnSort();
};

/**
* @class  gdsMenu에서 조회범위 가져오기
* @param  {String} sMenuId: 메뉴Id
* @return {String}
* @example this.gfnGetSearchScope(sMenuId)
*/
pForm.gfnGetSearchScope = function(sMenuId)
{   
	var objApp = nexacro.getApplication();
	var sValue = objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, "SEARCH_SCOPE_CD");
	return sValue;	
};

/**
* @class  현재 화면의 조회범위 가져오기
* @param  N/A
* @return {String}
* @example  this.gfnGetScope()
*/
pForm.gfnGetScope = function()
{
	if(this.gfnIsNull(this.opener))
	{
		var sValue = this.getOwnerFrame().form.fvSearchScopeCd;
	}
	else
	{
		var sValue = this.opener.getOwnerFrame().form.fvSearchScopeCd;
	}

	return sValue;
};

//----------------------------------------------------------------------------------
// Log 처리 
//----------------------------------------------------------------------------------

/**
 * @class 메뉴오픈로그저장(Transaction)
 * @param {String} sType	- 로그저장타입
 * @param {String} sProg	- 프로그램아이디
 * @param {String} sMenu	- 메뉴아이디
 * @return N/A
 * @example this.gfnSaveMenuOpenLog("MENU", this.fvPrgmId, this.fvMenuId);
 */
pForm.gfnSaveMenuOpenLog = function (sType, sProg, sMenu)
{
	var oDs = nexacro.getApplication().gdsLog;
	oDs.clearData();

	var nRow = oDs.addRow();
	
	oDs.setColumn(nRow, "LOG_TYPE", sType);
	oDs.setColumn(nRow, "PRGM_ID", sProg);
	oDs.setColumn(nRow, "MENU_ID", sMenu);
	
	var strSvcId    = "saveLog";
	var strSvcUrl   = "saveLog.do";
	var inData      = "dsList=gdsLog:U";
	var outData     = "";
	var strArg      = "";	// System별 접속차단자 체크
	var callBackFnc = "gfnStopCallback";
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcUrl , 	// trabsaction을 요청할 주소
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
						callBackFnc, true
						, "Y"
						);
};

/**
* @class 로그인로그 저장시 글로벌데이터셋 세팅
* @param  none
* @return N/A
* @example this.gfnSetLoginLogDataset();
*/
pForm.gfnSetLoginLogDataset = function ()
{
	var oDs = nexacro.getApplication().gdsLoginLog;
	oDs.clearData();

	// Window 값이 일관성없이 이상케 들어옴 SystemBase_Runtime.js
	var osversion = nexacro._OSVersion + "";
	if(nexacro._OS.indexOf("Win") >= 0)
	{
		switch (osversion)
		{
			case "5.0":
			case "5.01":
			case "Windows 2000":
			case "Windows 2000, Service Pack 1 (SP1)":
				osversion = "2000"; break;
			case "5.1":
			case "Windows XP":
				osversion = "XP"; break;
			case "5.2":
			case "Windows Server 2003 / Windows XP 64-bit":
				osversion = "2003"; break;
			case "6.0":
			case "Windows Vista":
				osversion = "Vista"; break;
			case "6.1":
			case "Windows 7":
				osversion = "7"; break;
			case "6.2":
			case "Windows 8":
				osversion = "8"; break;
			case "6.3":
			case "Windows 8.1":
				osversion = "8.1"; break;
			case "10.0":
			case "Windows 10":
				osversion = "10"; break;
			default :
		}
	}	

	var oLogInfo = {
		browser			: nexacro._Browser
		,browserver		: nexacro._BrowserVersion
		,os				: nexacro._OS
		,osver			: osversion
		,mobile			: this.gfnIsMobile()
		,screenwidth	: system.getScreenWidth()
		,screenheight	: system.getScreenHeight()
	}

	var nRow = oDs.addRow();
	oDs.setColumn(nRow, "BROWSER_CD"		, oLogInfo.browser);
	oDs.setColumn(nRow, "BROWSER_VERSION"	, oLogInfo.browserver);
	oDs.setColumn(nRow, "OS_CD"				, oLogInfo.os);
	oDs.setColumn(nRow, "OS_VERSION"		, oLogInfo.osver);
	oDs.setColumn(nRow, "SCREEN_HEIGHT"		, oLogInfo.screenheight);
	oDs.setColumn(nRow, "SCREEN_WIDTH"		, oLogInfo.screenwidth);
	oDs.setColumn(nRow, "MOB_YN"			, oLogInfo.mobile);
};

pForm.gfnMenuHelpUpdate = function(sPrgmId, sStatus)
{
	var ds = nexacro.getApplication().gdsMenu;
	ds.set_enableevent(false);
	
	ds.filter("PRGM_ID == '" + sPrgmId + "'");
	
	for(var i = 0; i < ds.rowcount; i++) 
	{
		ds.setColumn(i, "PRGM_HELP_FLAG", sStatus);
	}
	ds.filter("");
	ds.set_enableevent(true);
};

pForm = null;