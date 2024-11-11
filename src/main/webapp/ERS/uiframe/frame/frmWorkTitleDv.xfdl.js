(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWorkTitleDv");
            this.set_titletext("WorkFrameTitle");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(995,52);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBtnSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"btnId\" type=\"string\" size=\"50\"/><Column id=\"btnNm\" type=\"string\" size=\"50\"/></ColumnInfo><Rows><Row><Col id=\"btnId\">btnInit</Col><Col id=\"btnNm\">초기화</Col></Row><Row><Col id=\"btnId\">btnSearch</Col><Col id=\"btnNm\">조회</Col></Row><Row><Col id=\"btnId\">btnAdd</Col><Col id=\"btnNm\">추가</Col></Row><Row><Col id=\"btnId\">btnDel</Col><Col id=\"btnNm\">삭제</Col></Row><Row><Col id=\"btnId\">btnSave</Col><Col id=\"btnNm\">저장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_STYLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuId", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmBtnList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","9","140","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("경비 예산 조회");
            obj.set_cssclass("sta_WF_TitleLocation");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divAddBtn","601","12",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"9","67","28","-230",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"9","67","28","-300",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"9","67","28","-370",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"9","67","28","-440",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"9","67","28","-510",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","staTitle:10","11","32","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","btnMyMenu:3","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Open");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","btn_02:3","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Reload");
            this.addChild(obj.name, obj);

            obj = new Button("btn_04","btn_03:3","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi","btn_04:10","4","255","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAddBtn
            obj = new Layout("default","",0,0,this.divAddBtn.form,function(p){});
            this.divAddBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",995,52,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWorkTitleDv.xfdl", function() {
        /**
        *  AIA 비용관리 시스템
        *  @FileName 	frmWorkTitleDv.xfdl
        *  @Creator 	송원창
        *  @CreateDate 	2024.10.21
        *  @Desction   	업무화면의 타이틀&공통버튼 영역
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.21			송원창						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        this.fvMenuId = "";						// 화면 ID

        this.fvObjArray = new Array();			// 공통버튼 배열
        this.fvObjArray[0] = "btnInit"; 		// 초기화
        this.fvObjArray[1] = "btnSearch";  		// 조회
        this.fvObjArray[2] = "btnAdd";  		// 추가
        this.fvObjArray[3] = "btnDel";  		// 삭제
        this.fvObjArray[4] = "btnSave"; 		// 저장

        //this.fvObjArray[4] = "btnExcel"; 		// 엑셀
        //this.fvObjArray[5] = "btnPrint";  		// 출력
        //this.fvObjArray[6] = "btnHelp"; 		// 도움말



        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// QucikView 실행
        	if(nexacro._quickview_formurl)
        	{
        		this.btnMyMenu.set_enable(false);
        		return;
        	}
        	this.fvMenuId = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	//추가버튼조회
        	var oDs = nexacro.getApplication().gdsAddBtn;
        	oDs.filter("MENU_ID=='"+this.fvMenuId+"'");
        	this.dsAddBtn.copyData(oDs,true);
        	oDs.filter("");

        	// 마이메뉴 버튼 셋팅
        	this.fnSetMyMenuBtn();
        };

        this.form_onsize = function(obj,e)
        {
        	//버튼정렬 후 추가 버튼 div사이즈 변경
        // 	var oLast = this.divAddBtn.uLast;
        //
        // 	var nWidth = 0;
        // 	if(this.gfnIsNull(oLast)) nWidth = this.getOffsetWidth() - this.staNavi.getOffsetRight();
        // 	else  nWidth = oLast.getOffsetLeft() - this.staNavi.getOffsetRight()-3;
        //
        // 	this.divAddBtn.setOffsetWidth(nWidth);
        // 	this.resetScroll();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSearchCmmBtn = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectCmmBtnList";
        	var sSvcUrl     = "selectCmmBtnList.do";
        	var sInData     = "dsMenuId=dsMenuId";
        	var sOutData    = "dsCmmBtnList=CMMBTNLIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 		// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 		// trabsaction을 요청할 주소
        						sInData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  // 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId)
        	{
        		case "selectCmmBtnList":
        			this.fnSetAuthBtn1();
        			break;

        		default:break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴버튼 css 셋팅<br>
        	즐겨찾기되어있는 화면 -> ★ <br>
        	즐겨찾기가안되있는화면 -> ☆
        */
        this.fnSetMyMenuBtn = function ()
        {
        	//var objDs = this.objApp.gdsMyMenu;
        	var objDs = this.objApp.gvFrmLeft.form.dsMyMenu;
        	var nRow = objDs.findRow(this.FRAME_MENUCOLUMNS.menuId, this.fvMenuId);

        	if(nRow < 0)
        	{
        		this.btnMyMenu.set_cssclass("btn_WF_Favo");
        	}
        	else
        	{
        		this.btnMyMenu.set_cssclass("btn_WF_FavoS");
        	}
        };

        /**
         * @description 공통버튼 enable
        */
        this.fnEnableCmmBtn = function(v)
        {
        	// 버튼 Visible 처리
        	for(var i = 0; i < this.fvObjArray.length; i++)
        	{
        		var objBtn = this[this.fvObjArray[i]];
        		if(v.substr(i, 1) == "1")
        		{
        			objBtn.set_enable(true);
        		}
        		else if(v.substr(i, 1) == "0")
        		{
        			objBtn.set_enable(false);
        		}
        	}
        };

        /**
         * @description 공통버튼 enable
        */
        this.fnVisibleCmmBtn = function(v)
        {
        	// 버튼 Visible 처리
        	for(var i = 0; i < this.fvObjArray.length; i++)
        	{
        		var objBtn = this[this.fvObjArray[i]];
        		if(v.substr(i, 1) == "1")
        		{
        			objBtn.set_visible(true);
        		}
        		else if(v.substr(i, 1) == "0")
        		{
        			objBtn.set_visible(false);
        		}
        	}
        };

        this.fnSetAuthBtn = function(v)
        {
        	this.dsMenuId.setColumn(0, "menuId", v);
        	this.fnSearchCmmBtn();
        };

        /**
         * @description  폼권한에 따른 공통버튼 셋팅
        */
        this.fnSetAuthBtn1 = function(sAuth)
        {
        	this.dsBtnSeq.copyData(this.dsCmmBtnList);

        	var nRight = 0; // right기준값
        	var nGap = 3;    // 버튼사이 폭
        	var nFindRow;

        	// 버튼 Visible 처리
        	for(var i = 0; i < this.fvObjArray.length; i++)
        	{
        		var objBtn = this[this.fvObjArray[i]];

        		if(this.gfnIsNull(objBtn))
        		{
        			nFindRow = this.dsBtnSeq.findRow("btnId", this.fvObjArray[i]);
        			if(nFindRow != -1) this.dsBtnSeq.deleteRow(nFindRow);
        		}
        		else
        		{
        			if(this.dsCmmBtnList.getColumn(i, "usyn") == "Y")
        			{
        				objBtn.set_visible(true);
        			}
        			else
        			{
        				objBtn.set_visible(false);
        				nFindRow = this.dsBtnSeq.findRow("btnId", this.fvObjArray[i]);
        				if(nFindRow != -1) this.dsBtnSeq.deleteRow(nFindRow);
        			}
        		}
        	}

        	var oLast = null;
        	// 버튼 재정렬
        	for(var i = this.dsBtnSeq.rowcount - 1; i > -1; i--)
        	{
        		var sBtnId = this.dsBtnSeq.getColumn(i, "btnId");
        		var objBtn = this[sBtnId];

        		objBtn.move(null, 9, objBtn.getOffsetWidth(), objBtn.getOffsetHeight(), nRight);
        		nRight = nRight + nexacro.toNumber(nGap) + nexacro.toNumber(objBtn.getOffsetWidth());

        		if(objBtn.visible)
        		{
        			oLast = objBtn;
        		}
        	}

        	//버튼정렬 후 확장 버튼 추가 및 div사이즈 변경
        	this.fnAddExtendBtn("", oLast);
        };

        /**
         * @description 공통 버튼 정렬
        */
        this.fnCmmBtnSort = function()
        {
        	var nTop = 0;
        	var nWidth = 0;
        	var nHeight = 0;
        	var nRight = 10; // right기준값

        	var nGap = 3;    // 버튼사이 폭
        	var oLast = null;

        	// 버튼 재정렬
        	for(var i = this.dsBtnSeq.rowcount - 1; i > -1; i--)
        	{
        		var sBtnId = this.dsBtnSeq.getColumn(i, "btnId");
        		var objBtn = this[sBtnId];

        		if(objBtn.visible)
        		{
        			nTop = objBtn.getOffsetTop();
        			nHeight = objBtn.getOffsetHeight();
        			nWidth = objBtn.getOffsetWidth();

        			objBtn.move(null, nTop, nWidth, nHeight, nRight, 0);
        			nRight += nWidth + nGap;
        		}
        	}
        	nRight += nGap;
        	this.divAddBtn.set_right(nRight);
        };

        /**
         * @description  버튼정렬 후 확장 버튼 추가 및 div사이즈 변경
        */
        this.fnAddExtendBtn = function(btnList, v)
        {
        	if(btnList)
        	{
        		this.dsAddBtn.clearData();
        		for(var i = 0; i < btnList.length; i++)
        		{
        			var row = this.dsAddBtn.addRow()
        			this.dsAddBtn.setColumn(row, "MENU_ID", btnList[i].MENU_ID);
        			this.dsAddBtn.setColumn(row, "BTTN_ID", btnList[i].BTTN_ID);
        			this.dsAddBtn.setColumn(row, "BTTN_NM", btnList[i].BTTN_NM);
        			this.dsAddBtn.setColumn(row, "BTTN_STYLE", btnList[i].BTTN_STYLE);
        		}
        	}

        	//버튼정렬 후 추가 버튼 div사이즈 변경
        	this.divAddBtn.uLast = v;
        	var nWidth = 0;
        	if(this.gfnIsNull(v)) nWidth = this.getOffsetWidth() - this.staNavi.getOffsetRight();
        	else nWidth = v.getOffsetLeft() - this.staNavi.getOffsetRight()-3;

        	this.divAddBtn.setOffsetWidth(nWidth);
        	this.resetScroll();

        	//추가 버튼
        	var nLen = this.dsAddBtn.rowcount;
        	if(nLen == 0)
        	{
        		this.divAddBtn.set_visible(false);
        	}
        	else
        	{
        		this.fnMakeAddBtn(nLen);
        	}
        };

        /**
         * @description 추가버튼삭제
        */
        this.fnDeleteExtendBtn = function(v)
        {
        	var bntList = v.split(",");

        	for(var i = 0; i < bntList.length; i++)
        	{
        		var objDelBtn = this.divAddBtn.removeChild(bntList[i]);
        		if(objDelBtn != null)
        		{
        			objDelBtn.destroy();
        		}
        		objDelBtn = null;
        	}
        };

        /**
         * @description 추가버튼 enable
        */
        this.fnEnableExtendBtn = function(v1, v2)
        {
        	var bntList = v1.split(",");

        	for(var i = 0; i < bntList.length; i++)
        	{
        		var comp = this.divAddBtn.form.components[bntList[i]];
        		if(comp)
        		{
        			comp.set_enable(v2);
        		}
        	}
        };

        /**
         * @description 추가버튼 visible
        */
        this.fnVisibleExtendBtn = function(v1, v2)
        {
        	var bntList = v1.split(",");

        	for(var i = 0; i < bntList.length; i++)
        	{
        		var comp = this.divAddBtn.form.components[bntList[i]];
        		if(comp)
        		{
        			comp.set_visible(v2);
        		}
        	}
        };

        /**
         * @description 추가버튼 정렬
        */
        this.fnExtendBtnSort = function()
        {
        	var nRight	= 0;
        	var nWidth	= 60;
        	var nHeight = 28;
        	var oBtn 	= null;
        	var comp    = this.divAddBtn.form.components;

        	for(var j = 0; j < comp.length; j++)
        	{
        		oBtn = comp.get_item(j);
        		if(oBtn.visible)
        		{
        			oBtn.move(null, null, nWidth, nHeight, nRight, 0);
        			this.divAddBtn.form.resetScroll();
        			nWidth = oBtn.getOffsetWidth();
        			nRight += nWidth + 3;
        		}
        	}
        };

        /**
         * @description 추가버튼생성
        */
        this.fnMakeAddBtn = function (nLen)
        {
        	var sId 	= "";
        	var sTxt 	= "";
        	var sCss 	= "";
        	var nRight 	= 0;
        	var nWidth	= 60;
        	var nHeight = 28;
        	var oBtn 	= null;

        	for(var i = 0; i < nLen; i++)
        	{
        		sId  = this.dsAddBtn.getColumn(i, "BTTN_ID");
        		sTxt = this.dsAddBtn.getColumn(i, "BTTN_NM");
        		sCss = this.dsAddBtn.getColumn(i, "BTTN_STYLE");

        		oBtn = new nexacro.Button;
        		oBtn.init(sId, null, 0, nWidth, nHeight, nRight, 0);
        		this.divAddBtn.addChild(sId, oBtn);

        		oBtn.addEventHandler("onclick", this.addBtn_onclick, this);
        		oBtn.set_cssclass(sCss);
        		oBtn.set_text(sTxt);
        		oBtn.set_fittocontents("width");
        		oBtn.show();

        		this.divAddBtn.form.resetScroll();

        		nRight += oBtn.getOffsetWidth() + 3;
        	}

        	this.divAddBtn.set_visible(true);
        };

        /**
         * @description  북마크버튼 css 변경
         * @param {Object} objBtn - 북마크 버튼
        */
        this.fnSetBookmarkCss = function(objBtn)
        {
        	if(this.gfnIsNull(objBtn)) return;

        	var sCssclass = objBtn.cssclass;

        	if(sCssclass == "btn_WF_Favo")
        	{
        		objBtn.set_cssclass("btn_WF_FavoS");
        	}
        	else
        	{
        		objBtn.set_cssclass("btn_WF_Favo");
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역x
        *******************************************************************************************************************************/
        /**
         * @description 추가버튼 click
         */
        this.addBtn_onclick = function (obj, e)
        {
        	if(!obj.enable) return;

        	var objTargetForm = this.getOwnerFrame().form.fvDivWork.form;

        	var sFunctionPrefix = "cfn";
        	var sFunctionNm = sFunctionPrefix + obj.name;

        	// 업무화면의 cfn+버튼명 (ex : cfnbtnAddMg ) 함수 호출
        	if(objTargetForm[sFunctionNm]) objTargetForm.lookupFunc(sFunctionNm).call(obj, e);
        };

        /**
         * @description 공통버튼 click
         */
        this.btnCmmn_onclick = function(obj,e)
        {
        	if(!obj.enable) return;

        	if(obj.id == "btnInit")
        	{
        		this.getOwnerFrame().form.fvDivWork.reload()
        		return;
        	}

        	var objTargetForm = this.getOwnerFrame().form.fvDivWork.form;

        	var sFunctionPrefix = "cfn";
        	var sBtnNm = obj.name.substr(3);
        	var sFunctionNm = sFunctionPrefix + sBtnNm;

        	// 업무화면의 cfnAdd, cfnDel, cfnSave 함수 호출(Print, Help는 공통에서 처리..)
        	if (objTargetForm[sFunctionNm]) objTargetForm.lookupFunc(sFunctionNm).call(obj, e);
        };

        /**
         * @description 마이메뉴(Bookmark) click
         */
        this.btnMyMenu_onclick = function(obj,e)
        {
        	var bIsMymenu = false;
        	if(this.btnMyMenu.cssclass == "btn_WF_FavoS")	bIsMymenu = true;

        	var objDs = this.objApp.gvFrmLeft.form.dsMyMenu;
        	var objMenuDs = this.objApp.gdsMenu;

        	objDs.set_enableevent(false);
        	this.objApp.gvFrmLeft.form.divFavoratie.form.grdFavoratie.set_enableredraw(false);

        	// 메뉴데이터셋 컬럼명
        	var sMenuIdCol = this.FRAME_MENUCOLUMNS.menuId;
        	var sMenuNmCol = this.FRAME_MENUCOLUMNS.menuNm;
        	var sMenuUrlCol = this.FRAME_MENUCOLUMNS.menuUrl;
        	var sGroupIdCol = this.FRAME_MENUCOLUMNS.groupId;
        	var sPrgmIdCol = this.FRAME_MENUCOLUMNS.prgmId;
        	var sPrgmPathCol = this.FRAME_MENUCOLUMNS.prgmPath;
        	var sPrgmFileNmCol = this.FRAME_MENUCOLUMNS.prgmFileNm;

        	if(bIsMymenu)
        	{
        		// 마이메뉴 해제
        		var nRow = objDs.findRow(sMenuIdCol, this.fvMenuId);

        		if(nRow > -1) objDs.deleteRow(nRow);
        	}
        	else
        	{
        		// 마이메뉴 추가
        		var nRow = objMenuDs.findRow(sMenuIdCol, this.fvMenuId);

        		var nNewRow =  objDs.addRow();

        		// 메뉴데이터
        		var sMenuId = objMenuDs.getColumn(nRow, sMenuIdCol) ? objMenuDs.getColumn(nRow, sMenuIdCol):"";
        		var sMenuNm = objMenuDs.getColumn(nRow, sMenuNmCol) ? objMenuDs.getColumn(nRow, sMenuNmCol):"";
        		var sMenuUrl = objMenuDs.getColumn(nRow, sMenuUrlCol) ? objMenuDs.getColumn(nRow, sMenuUrlCol):"";
        		var sGroupId = objMenuDs.getColumn(nRow, sGroupIdCol) ? objMenuDs.getColumn(nRow, sGroupIdCol):"";
        		var sPrgmId = objMenuDs.getColumn(nRow, sPrgmIdCol) ? objMenuDs.getColumn(nRow, sPrgmIdCol):"";
        		var sPrgmPath = sMenuUrl.split("::")[0] ? sMenuUrl.split("::")[0] : "";
        		var sPrgmFileNm = sMenuUrl.split("::")[1] ? sMenuUrl.split("::")[1] : "";

        		objDs.setColumn(nNewRow, sMenuIdCol, sMenuId);
        		objDs.setColumn(nNewRow, sMenuNmCol, sMenuNm);
        		objDs.setColumn(nNewRow, sGroupIdCol, sGroupId);
        		objDs.setColumn(nNewRow, sPrgmIdCol, sPrgmId);
        		objDs.setColumn(nNewRow, sPrgmPathCol, sPrgmPath);
        		objDs.setColumn(nNewRow, sPrgmFileNmCol, sPrgmFileNm);
        		objDs.setColumn(nNewRow, "SYTM_FLAG_CD", nexacro.getApplication().gvSytmFlagCd);
        	}
        	// 마이메뉴 저장 트랜잭션
        	//this.objApp.gvFrmLeft.form.fnSaveMyMenu(objDs);

         	objDs.set_enableevent(true);
         	this.objApp.gvFrmLeft.form.divFavoratie.form.grdFavoratie.set_enableredraw(true);

        	// 북마크버튼 css 변경
        	this.fnSetBookmarkCss(obj);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnInit.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnCmmn_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
        };
        this.loadIncludeScript("frmWorkTitleDv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
