(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp09_1");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">aaaaaaaaa</Col><Col id=\"NAME\">김영수</Col><Col id=\"DEPARTMENT\">사업컨설팅팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">bbbbbbbb</Col><Col id=\"NAME\">최희영</Col><Col id=\"DEPARTMENT\">프리세일즈팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">ccccccccc</Col><Col id=\"NAME\">최택수</Col><Col id=\"DEPARTMENT\">재무회계팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row><Row><Col id=\"ID\">dddddddd</Col><Col id=\"NAME\">소희진</Col><Col id=\"DEPARTMENT\">공시팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">eeeeeeeee</Col><Col id=\"NAME\">김나라</Col><Col id=\"DEPARTMENT\">인사총무팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">ffffffffffff</Col><Col id=\"NAME\">박찬수</Col><Col id=\"DEPARTMENT\">영업팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">gggggggg</Col><Col id=\"NAME\">허소진</Col><Col id=\"DEPARTMENT\">사업지원팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">hhhhhhhh</Col><Col id=\"NAME\">김철수</Col><Col id=\"DEPARTMENT\">개발지원팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25","78","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","116",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","165","70","30","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H46");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 20");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"57","32","20","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup02");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"57","32","80","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20",null,null,"20","20","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","730",null,"30","10",null,"52",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H10");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch00","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","96","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_text("예산년도");
            obj.set_cssclass("sta_WF_SchLabelEssential");
            obj.set_fittocontents("width");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta01","218","12","86","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"62","32","20","8",null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cbo04","88","12","120","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilityenable("true");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            var divSearch00_form_cbo04_innerdataset = new nexacro.NormalDataset("divSearch00_form_cbo04_innerdataset", obj);
            divSearch00_form_cbo04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2023</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2024</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">2025</Col></Row></Rows>");
            obj.set_innerdataset(divSearch00_form_cbo04_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edt04","294","12","160","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_Search");
            obj.set_text("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("btn02","426","12","28","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("sta04_01","20","70","90","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H8");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal",null,"88","53","24","281",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("총 <fc v=\'#d31145\'>270</fc>건");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Total");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","staTotal:10","85","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","94","0","77","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("Button36","174","0","77","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","47","0","44","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","0","0","44","24",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("sta04_00_00",null,"109","400","7","24",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch00.form
            obj = new Layout("default","",0,0,this.divSearch00.form,function(p){});
            this.divSearch00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",850,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp17_1.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	Temp09_01.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/01/05
        *  @Desction    팝업연결용 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearch = "";	// 부모에서 넘긴 검색조건

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 초기화
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
        	this.fvSearch = this.getOwnerFrame().pvSearch;

        	if (!this.gfnIsNull(this.fvSearch))
        	{
        		this.dsGrid.filter("NAME.indexOf('" + this.fvSearch + "') > -1");
        	}

        	this.grdList.set_binddataset("dsGrid");

        	this.dsGrid.set_rowposition(0);
        }

        /**
         * @description 사용자 검색
        */
        this.fnSearch = function()
        {
        	var sSearch = this.divSearch.form.edtName.value;

        	if (this.gfnIsNull(sSearch)) sSearch = "";

        	this.dsGrid.filter("NAME.indexOf('" + sSearch + "') > -1");
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnConfirm_onclick = function(obj,e)
        {
        	var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        /**
         * @description 조회 버튼 클릭 이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	// 사용자 검색
        	this.fnSearch();
        };

        /**
         * @description 검색 엔터키 이벤트
        */
        this.divSearch_edtName_onkeyup = function(obj,e)
        {
        	// 엔터키일 경우
        	if (e.keycode == 13)
        	{
        		// 사용자 검색
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("Temp17_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
