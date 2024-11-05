(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLeft");
            this.set_titletext("frameLeft");
            this.set_background("blue");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_FULL_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_EN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","35","0","191","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("LEFT frame");
            obj.set_font("normal 800 36px/normal \"Malgun Gothic\"");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenu","48","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_binddataset("dsMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"195\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" treelevel=\"bind:menuLvl\" displaytype=\"treeitemcontrol\" edittype=\"tree\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divFavoratie","381","124","200","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFavoratie","0","0",null,null,"0","0",null,null,null,null,this.divFavoratie.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_binddataset("dsMyMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"195\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" treelevel=\"bind:menuLv\" tooltiptext=\"bind:menuNm\"/></Band></Format></Formats>");
            this.divFavoratie.addChild(obj.name, obj);

            obj = new Button("btnSearch","0","100","48","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","0","153","48","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("편성");
            this.addChild(obj.name, obj);

            obj = new Button("btnOper","0","213","48","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("운영");
            this.addChild(obj.name, obj);

            obj = new Button("btnMgnt","0","273","48","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnFavoratie","0","333","48","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("북마크");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFavoratie.form
            obj = new Layout("default","",0,0,this.divFavoratie.form,function(p){});
            this.divFavoratie.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",320,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLeft.xfdl", function() {
        /**
        *  AIA 비용관리 시스템
        *  @FileName 	frameLeft.xfdl
        *  @Creator 	송원창
        *  @CreateDate 	2024.10.21
        *  @Desction
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

        this.fvMenuStatus	= "close";		// Left 메뉴 접기/펼치기 상태값 (open, close)
        this.fvIsBackSpace 	= "N";			// 메뉴검색에서 백스페이스 눌렀는 지 여부
        this.fvMenuType		= "menu";		// menu, mymenu
        this.fvMyMenuEdit	= false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnload(obj,e); //필수함수

        	// 마이메뉴 gdsMenu 카피
        	this.fnCopyMenu();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSearchMyMenu = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "searchMyMenu";
        	var sSvcUrl   	= "searchMyMenu.do";
        	var sInData     = "";
        	var sOutData    = "gdsMyMenu=dsList";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 		// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 		// trabsaction을 요청할 주소
        						sInData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  // 통신방법 정의 [생략가능]
        };

        /**
         * @description 마이메뉴 저장 트랜잭션
         */
        this.fnSaveMyMenu = function()
        {
        	// 마이메뉴 저장
        	var sSvcId   	= "saveMyMenu";
        	var sSvcUrl   	= "saveMyMenu.do";
        	var sInData     = "dsList=dsMyMenu:U";
        	var sOutData    = "";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction(sSvcId , 		// transaction을 구분하기 위한 svc id값
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
        		case "saveMyMenu":
        			// 마이메뉴 재조회
        			this.fnSearchMyMenu();
        			break;
        		case "searchMyMenu":
        			// gdsMyMenu -> dsMyMenu 카피
        			this.fnCopyMyMenu();
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴 gdsMyMenu 카피
         */
        this.fnCopyMenu = function()
        {
        //	this.dsMenuList.clearData();
        //	this.dsMenuList.copyData(this.objApp.gdsMenu);
        //	this.dsMenuList.appendData(this.objApp.Dataset0, true);

        	//this.objApp.gdsMenu.appendData(this.objApp.Dataset0, true);
        	this.dsMenu.copyData(this.objApp.gdsMenu);


        };

        /**
         * @description 그리드 RowSize 셋팅
        */
        this.fnSetGridRowSize = function()
        {
        	var objGrid = this.divLnb.form.grdMenu;
        	objGrid.set_enableredraw(false);

        	for(var i=0; i < this.dsMenu.rowcount; i++)
        	{
        		var grdRow = objGrid.getTreeRow(i);
        		var css = objGrid.getCellPropertyValue(grdRow, 0, "cssclass");

        		if(css == "cell_LF_Lev") {
        			objGrid.setRealRowSize(grdRow,"50");
        		} else {
        			objGrid.setRealRowSize(grdRow,"25");
        		}
        	}
        	objGrid.set_enableredraw(true);
        };

        /**
         * @description 메뉴 찾기 셋팅(Menu List Box 생성)
        */
        this.fnSetMenuSearch = function()
        {
        	// 메뉴 검색 팝업DIV 위치 에디트 하단으로 이동
        	this.pdivSearchMenu.move(0, 42);

        	// 메뉴 Datset 복사
        	this.fnSetMenuSearchDataset();
        };

        /**
         * @description FORM오픈 [공통함수호출]
        */
        this.fnFormOpen = function (sMenuId, objParam)
        {
        	if(this.gfnIsNull(sMenuId)) return;

        	//this.fnSetRecentMenuDs(sMenuId);
        	this.gfnOpenMenu(sMenuId, objParam, false);
        };

        /**
         * @description 최근연린 메뉴 저장
        */
        this.fnSetRecentMenuDs = function(sMenuId)
        {
        	var nRow = this.dsRecentMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sMenuId);
        	if(nRow < 0)
        	{
        		nRow		= this.dsMenuList.findRow(this.FRAME_MENUCOLUMNS.menuId, sMenuId);
        		var sMenuNm = this.dsMenuList.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);

        		nRow = this.dsRecentMenu.addRow();
        		this.dsRecentMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuId, sMenuId);
        		this.dsRecentMenu.setColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm, sMenuNm);
        	}
        };

        /**
         * @description 메뉴 visible
        */
        this.fnMenuVisible = function()
        {
        	var visibleFlag = this.fvMenuStatus == "close" ? false : true;
        	this.grdMenu.visible = visibleFlag;
        	this.Static00.visible = visibleFlag;
        	this.resetScroll();
        };


        this.fnMenuVisible2 = function()
        {
        	this.fvMenuStatus == "open"
        	this.objApp.gvHFS.set_separatesize("320,*");
        	this.objApp.gvFrmMdi.form.btnLeftMenuShowHide.cssclass = "btn_MDI_MenuClose";
        	this.grdMenu.visible = true;
        	this.Static00.visible = true;
        	this.resetScroll();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 메뉴 전체 열기
        */
        this.divLeftMenu_btnClose_onclick = function(obj,e)
        {
        	this.divLeftMenu.form.grdLeftMenu.treeinitstatus = "expand,all";
        };

        /**
         * @description 메뉴 전체 닫기
        */
        this.divLeftMenu_btnOpen_onclick = function(obj,e)
        {
        	this.divLeftMenu.form.grdLeftMenu.treeinitstatus = "collapse,all";
        };

        /**
         * @description 메뉴 클릭
        */
        this.grdMenu_oncellclick = function(obj,e)
        {
        	// Tree 이미지 클릭시 리턴
        	if(e.clickitem == "treeitembutton") return;

        	var nRow = obj.getTreeRow(e.row);

        	var nStat = obj.getTreeStatus(nRow);

        	// 자식이 없으면
        	if((nStat^1) != 2) obj.setTreeStatus(nRow ,nStat^1);

        	if(nStat == 3)
        	{
        		var objDs = obj.getBindDataset();
        		// Click시 해당 메뉴 호출
        		var sMenuId  = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        		var sPageUrl = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuUrl);

        		if(!(this.gfnIsNull(sMenuId) || this.gfnIsNull(sPageUrl))) {
        			// 메뉴 화면 호출
        			this.fnFormOpen(sMenuId);
        		}
        	}
        };

        /**
         * @description 즐겨찾기 최근메뉴클릭
        */
        this.divFavoratie_grdFavoratie_divRecent_grdRecent_oncellclick = function(obj,e)
        {
        	var nCellIdx = e.cell;

        	var objDs = obj.getBindDataset();

        	// 선택한 메뉴 아이디
        	var sMenuId = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuId);

        	if (nCellIdx == 0) {
        		if(this.fvMyMenuEdit) return;
        		// 메뉴 클릭일 경우
        		this.fnFormOpen(sMenuId);
        	} else if (nCellIdx == 1) {
        		if(!this.fvMyMenuEdit) return;
        		// X 버튼일 경우
        		this.dsMyMenu.deleteRow(objDs.getDatasetRow(e.row));
        	}
        };

        /**
         * @description 홈 화면 바로가기
        */
        this.btnHome_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnMenuVisible2();
        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.fnMenuVisible2();
        };

        this.btnOper_onclick = function(obj,e)
        {
        	this.fnMenuVisible2();
        };

        this.btnMgnt_onclick = function(obj,e)
        {
        	this.fnMenuVisible2();
        };

        this.btnFavoratie_onclick = function(obj,e)
        {
        	this.fnMenuVisible2();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.divFavoratie.form.grdFavoratie.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btnOper.addEventHandler("onclick",this.btnOper_onclick,this);
            this.btnMgnt.addEventHandler("onclick",this.btnMgnt_onclick,this);
            this.btnFavoratie.addEventHandler("onclick",this.btnFavoratie_onclick,this);
        };
        this.loadIncludeScript("frameLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
