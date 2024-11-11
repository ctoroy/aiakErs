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
            this.set_cssclass("frm_LF_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(363,910);
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


            obj = new Dataset("dsFavorite", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divFavoratie","811","124","200","150",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLeftMenu","0","0","58",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuBg","0","0","58",null,null,"0",null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_Bg");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("bntOrganization","0","84","58","84",null,null,null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("0");
            obj.set_text("편성");
            obj.set_cssclass("btn_LF_Menu02");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("btnOperation","0","168","58","84",null,null,null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("2");
            obj.set_text("운영");
            obj.set_cssclass("btn_LF_Menu03");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("btnManagment","0","252","58","84",null,null,null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("3");
            obj.set_text("관리");
            obj.set_cssclass("btn_LF_Menu04");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("btnFavoratie","0","336","58","84",null,null,null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("4");
            obj.set_text("북마크");
            obj.set_cssclass("btn_LF_Menu05");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("btnSetting","14",null,"28","24",null,"71",null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_Set");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("btnLogOut","14",null,"28","24",null,"25",null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_Logout");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Button("btnAllSearch","0","0","58","84",null,null,null,null,null,null,this.divLeftMenu.form);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_cssclass("btn_LF_Menu01S");
            this.divLeftMenu.addChild(obj.name, obj);

            obj = new Div("divList","58","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","25","12","255","28",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("edi_LF_Sch");
            this.divList.addChild(obj.name, obj);

            obj = new Button("btnSearch","233","14","30","24",null,null,null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_Sch");
            this.divList.addChild(obj.name, obj);

            obj = new Grid("grdMenu","25","50",null,null,"25","2",null,null,null,null,this.divList.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_binddataset("dsMenu");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_treeuseline("false");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_LF_Lev2\" text=\"bind:menuNm\" tooltiptext=\"bind:menuNm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menuLvl\"/></Band></Format><Format id=\"btnFavoratie\"><Columns><Column size=\"199\"/><Column size=\"48\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" tooltiptext=\"bind:menuNm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menuLvl\"/><Cell col=\"1\" cssclass=\"cell_LF_Delete\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);

            obj = new Grid("grdFavoratie","410","315",null,null,"-247","445",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.set_binddataset("dsMyMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"195\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" treelevel=\"bind:menuLv\" tooltiptext=\"bind:menuNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivSearchList","403","43","255","200",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_Sch");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSearchList","0","0",null,null,"0","0",null,null,null,null,this.pdivSearchList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuSearch");
            obj.set_cssclass("grd_LF_Sch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"235\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNm\" tooltiptext=\"bind:menuNm\" displaytype=\"decoratetext\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdivSearchList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFavoratie.form
            obj = new Layout("default","",0,0,this.divFavoratie.form,function(p){});
            this.divFavoratie.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeftMenu.form
            obj = new Layout("default","",0,0,this.divLeftMenu.form,function(p){});
            this.divLeftMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivSearchList.form
            obj = new Layout("default","",0,0,this.pdivSearchList.form,function(p){});
            this.pdivSearchList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",363,910,this,function(p){});
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
        	let sSvcId 		= "searchMyMenu";
        	let sSvcUrl   	= "searchMyMenu.do";
        	let sInData     = "";
        	let sOutData    = "gdsMyMenu=dsList";
        	let sArg      	= "";
        	let sCallBackFnc = "fnCallback";

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
        	let sSvcId   	= "saveMyMenu";
        	let sSvcUrl   	= "saveMyMenu.do";
        	let sInData     = "dsList=dsMyMenu:U";
        	let sOutData    = "";
        	let sArg      	= "";
        	let sCallBackFnc = "fnCallback";

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
        	let objGrid = this.divLnb.form.grdMenu;
        	objGrid.set_enableredraw(false);

        	for(let i=0; i < this.dsMenu.rowcount; i++)
        	{
        		let grdRow = objGrid.getTreeRow(i);
        		let css = objGrid.getCellPropertyValue(grdRow, 0, "cssclass");

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
        	let nRow = this.dsRecentMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sMenuId);
        	if(nRow < 0)
        	{
        		nRow		= this.dsMenuList.findRow(this.FRAME_MENUCOLUMNS.menuId, sMenuId);
        		let sMenuNm = this.dsMenuList.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);

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
        	let visibleFlag = this.fvMenuStatus == "close" ? false : true;
        	this.divList.visible = visibleFlag;
        	this.resetScroll();
        };

        /**
         * @description 메뉴 visible2
        */
        this.fnMenuVisible2 = function(v)
        {
        	let format;
        	if(v.id != "btnFavoratie")
        	{
        		bindDs = "dsMenu"
        		format = "default";
        	}
        	else
        	{
        		this.dsFavorite.copyData(this.dsMenu);
        		bindDs = "dsFavorite"
        		format = "btnFavoratie";
        	}

        	this.divList.form.grdMenu.binddataset = bindDs;
        	this.divList.form.grdMenu.formatid = format;
        	this.fvMenuStatus = "open"
        	this.objApp.gvHFS.set_separatesize("363,*");
        	this.objApp.gvFrmMdi.form.btnLeftMenuShowHide.cssclass = "btn_LF_Close";
        	this.divList.visible = true;
        	this.resetScroll();
        };

        /**
         * @description 대메뉴 css 변경
        */
        this.fnCssclassChange = function(v)
        {
        	let bntList = {
        					"btnAllSearch":		"btn_LF_Menu01",
        					"bntOrganization":	"btn_LF_Menu02",
        					"btnOperation":		"btn_LF_Menu03",
        					"btnManagment":		"btn_LF_Menu04",
        					"btnFavoratie":		"btn_LF_Menu05"
        					};
        	let comp = this.divLeftMenu.form.components;

        	for(list in bntList)
        	{
        		list != v.id ? comp[list].cssclass = bntList[list] : comp[list].cssclass = bntList[list]+"S";
            }
        };
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

        	let nRow = obj.getTreeRow(e.row);

        	let nStat = obj.getTreeStatus(nRow);

        	// 자식이 없으면
        	if((nStat^1) != 2) obj.setTreeStatus(nRow ,nStat^1);

        	if(nStat == 3)
        	{
        		let objDs = obj.getBindDataset();
        		// Click시 해당 메뉴 호출
        		let sMenuId  = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        		let sPageUrl = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuUrl);

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
        	let nCellIdx = e.cell;

        	let objDs = obj.getBindDataset();

        	// 선택한 메뉴 아이디
        	let sMenuId = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuId);

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


        /**
         * @description 대메뉴 클릭
        */
        this.divLeftMenu_onclick = function(obj,e)
        {
        	this.fnCssclassChange(obj);
        	this.fnMenuVisible2(obj);
        };

        /**
         * @description 세팅
        */
        this.divLeftMenu_btnSetting_onclick = function(obj,e)
        {

        };

        /**
         * @description 로그아웃
        */
        this.divLeftMenu_btnLogOut_onclick = function(obj,e)
        {

        };

        this.pdivSearchList_grdSearchList_oncellclick = function(obj,e)
        {
        	let objDs = obj.getBindDataset();

        	// 선택한 메뉴 아이디
        	let sMenuId = objDs.getColumn(objDs.rowposition, this.FRAME_MENUCOLUMNS.menuId);
        	this.fnFormOpen(sMenuId);
        	this.pdivSearchList.closePopup();
        };

        this.divList_edtSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.divList.form.btnSearch.click();
        	}
        };

        this.divList_btnSearch_onclick = function(obj,e)
        {
        	this.dsMenuSearch.clearData();
        	this.dsMenuSearch.copyData(this.dsMenu);
        	this.dsMenuSearch.rowposition = -1;
        	let oEdit = this.divList.form.edtSearch;
        	let filterstr;

        	this.dsMenuSearch.set_enableevent(false);
        	if(!this.gfnIsNull(oEdit.value))
        	{
        		filterstr = this.FRAME_MENUCOLUMNS.menuNm + ".indexOf('" + oEdit.value + "') > -1";
        	}
        	else
        	{
        		filterstr = "";
        	}

        	this.dsMenuSearch.filterstr = filterstr;
        	let nm;
        	for(let i = 0; i < this.dsMenuSearch.rowcount; i++)
        	{
        		nm = this.gfnReplaceAll(this.dsMenuSearch.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm), oEdit.value, "<fc v='red'>"+oEdit.value+"</fc>");
        		this.dsMenuSearch.setColumn(i, this.FRAME_MENUCOLUMNS.menuNm, nm);
        	}
        	this.dsMenuSearch.set_enableevent(true);
        	this.pdivSearchList.trackPopupByComponent(oEdit, 0, oEdit.getOffsetHeight()+5)
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divLeftMenu.form.bntOrganization.addEventHandler("onclick",this.divLeftMenu_onclick,this);
            this.divLeftMenu.form.btnOperation.addEventHandler("onclick",this.divLeftMenu_onclick,this);
            this.divLeftMenu.form.btnManagment.addEventHandler("onclick",this.divLeftMenu_onclick,this);
            this.divLeftMenu.form.btnFavoratie.addEventHandler("onclick",this.divLeftMenu_onclick,this);
            this.divLeftMenu.form.btnSetting.addEventHandler("onclick",this.divLeftMenu_btnSetting_onclick,this);
            this.divLeftMenu.form.btnLogOut.addEventHandler("onclick",this.divLeftMenu_btnLogOut_onclick,this);
            this.divLeftMenu.form.btnAllSearch.addEventHandler("onclick",this.divLeftMenu_onclick,this);
            this.divList.form.edtSearch.addEventHandler("onkeyup",this.divList_edtSearch_onkeyup,this);
            this.divList.form.btnSearch.addEventHandler("onclick",this.divList_btnSearch_onclick,this);
            this.divList.form.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.grdFavoratie.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.pdivSearchList.form.grdSearchList.addEventHandler("oncellclick",this.pdivSearchList_grdSearchList_oncellclick,this);
        };
        this.loadIncludeScript("frameLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
