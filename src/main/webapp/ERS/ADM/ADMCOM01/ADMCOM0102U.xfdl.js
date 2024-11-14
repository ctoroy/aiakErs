(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("menuList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,828);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"sysNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"callParam\" type=\"string\" size=\"32\"/><Column id=\"comYn\" type=\"string\" size=\"32\"/><Column id=\"crtrId\" type=\"string\" size=\"32\"/><Column id=\"highMenuId\" type=\"string\" size=\"32\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"mdpsId\" type=\"STRING\" size=\"32\"/><Column id=\"menuId\" type=\"STRING\" size=\"32\"/><Column id=\"menuLvl\" type=\"STRING\" size=\"32\"/><Column id=\"menuNm\" type=\"STRING\" size=\"32\"/><Column id=\"menuTpcd\" type=\"STRING\" size=\"32\"/><Column id=\"mgrUsyn\" type=\"STRING\" size=\"32\"/><Column id=\"prgId\" type=\"STRING\" size=\"32\"/><Column id=\"prgPath\" type=\"STRING\" size=\"32\"/><Column id=\"prgType\" type=\"STRING\" size=\"32\"/><Column id=\"rmk\" type=\"STRING\" size=\"32\"/><Column id=\"sortSeq\" type=\"INT\" size=\"4\"/><Column id=\"sysId\" type=\"STRING\" size=\"32\"/><Column id=\"usyn\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmBtnList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuId", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCom", this);
            obj._setContents("<ColumnInfo><Column id=\"sortSeq\" type=\"INT\" size=\"4\"/><Column id=\"menuId\" type=\"STRING\" size=\"32\"/><Column id=\"btnId\" type=\"STRING\" size=\"32\"/><Column id=\"btnNm\" type=\"STRING\" size=\"32\"/><Column id=\"functionNm\" type=\"STRING\" size=\"32\"/><Column id=\"cssNm\" type=\"STRING\" size=\"32\"/><Column id=\"usyn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"btnId\">btnInit</Col><Col id=\"btnNm\">초기화</Col><Col id=\"cssNm\">btn__WF_init</Col><Col id=\"sortSeq\">1</Col><Col id=\"functionNm\">cfnSearch</Col><Col id=\"usyn\">Y</Col></Row><Row><Col id=\"btnId\">btnSearch</Col><Col id=\"btnNm\">조회</Col><Col id=\"cssNm\">btn_WF_search</Col><Col id=\"sortSeq\">2</Col><Col id=\"functionNm\">cfnSearch</Col><Col id=\"usyn\">Y</Col></Row><Row><Col id=\"btnId\">btnAdd</Col><Col id=\"btnNm\">추가</Col><Col id=\"cssNm\">btn_WF_add</Col><Col id=\"sortSeq\">3</Col><Col id=\"functionNm\">cfnAdd</Col><Col id=\"usyn\">Y</Col></Row><Row><Col id=\"btnId\">btnDel</Col><Col id=\"btnNm\">삭제</Col><Col id=\"cssNm\">btn_WF_del</Col><Col id=\"sortSeq\">4</Col><Col id=\"functionNm\">cfnDel</Col><Col id=\"usyn\">Y</Col></Row><Row><Col id=\"btnId\">btnSave</Col><Col id=\"btnNm\">저장</Col><Col id=\"cssNm\">btn_WF_save</Col><Col id=\"sortSeq\">5</Col><Col id=\"functionNm\">cfnSave</Col><Col id=\"usyn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","540","42","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","753","33","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"52","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divSearch");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staSysId","0","13","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("시스템ID");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSysId","100","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSysNm","240","13","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("시스템명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSysNm","330","13","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"62","36","25","7",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuTitle","0","60","180","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메뉴/프로그램 목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","98",null,null,"30","240",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuList");
            obj.set_cellsizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"메뉴명\"/><Cell col=\"2\" text=\"시스템\"/><Cell col=\"3\" text=\"메뉴ID\"/><Cell col=\"4\" text=\"상위메뉴\"/><Cell col=\"5\" text=\"메뉴유형\"/><Cell col=\"6\" text=\"레벨\"/><Cell col=\"7\" text=\"순서\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"메뉴위치\"/><Cell col=\"10\" text=\"프로그램ID\"/><Cell col=\"11\" text=\"타입\"/><Cell col=\"12\" text=\"사용여부\"/><Cell col=\"13\" text=\"호출파라미터\"/><Cell col=\"14\" text=\"출력여부\"/><Cell col=\"15\" text=\"공통여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:menuNm\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;treeitemcontrol&apos;\" edittype=\"text\" treelevel=\"bind:menuLvl\" tooltiptext=\"bind:menuNm\" border=\"0px none,1px solid #dbdee2,0px none,0px none\"/><Cell col=\"2\" edittype=\"text\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" text=\"bind:sysId\"/><Cell col=\"3\" text=\"bind:menuId\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;text&apos;  : &apos;none&apos;\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\"/><Cell col=\"4\" edittype=\"text\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" text=\"bind:highMenuId\"/><Cell col=\"5\" edittype=\"text\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" text=\"bind:menuTpcd\"/><Cell col=\"6\" textAlign=\"center\" edittype=\"text\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" text=\"bind:menuLvl\"/><Cell col=\"7\" textAlign=\"center\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" text=\"bind:sortSeq\" edittype=\"text\"/><Cell col=\"8\" expr=\"dataset.getRowType(currow)\"/><Cell col=\"9\" tooltiptext=\"bind:prgPath\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;text&apos;\" edittype=\"text\" text=\"bind:prgPath\"/><Cell col=\"10\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\" text=\"bind:prgId\"/><Cell col=\"11\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\" text=\"bind:prgType\"/><Cell col=\"12\" text=\"bind:usyn\"/><Cell col=\"13\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\" text=\"bind:callParam\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:mgrUsyn\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"15\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:comYn\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuTitle00","0",null,"180","38",null,"194",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("버튼목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList00","0",null,null,"194","30","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsCmmBtnList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"170\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"사용여부\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"버튼명\"/><Cell col=\"4\" text=\"호출함수\"/><Cell col=\"5\" text=\"클래스명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:usyn\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"1\" text=\"bind:sortSeq\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:btnId\"/><Cell col=\"3\" text=\"bind:btnNm\"/><Cell col=\"4\" text=\"bind:functionNm\"/><Cell col=\"5\" text=\"bind:cssNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divGridBtn",null,"67","251","24","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","94","0","77","24",null,null,null,null,null,null,this.divGridBtn.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divGridBtn.addChild(obj.name, obj);

            obj = new Button("btnDel","174","0","77","24",null,null,null,null,null,null,this.divGridBtn.form);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divGridBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","47","0","44","24",null,null,null,null,null,null,this.divGridBtn.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divGridBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","0","0","44","24",null,null,null,null,null,null,this.divGridBtn.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.divGridBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGridBtn.form
            obj = new Layout("default","",0,0,this.divGridBtn.form,function(p){});
            this.divGridBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1527,828,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSysId","value","dsCond","sysId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSysNm","value","dsCond","sysNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ADMCOM0102U.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	SCC01/SCC010102U.xfdl
        *  @Creator 	송원창
        *  @CreateDate 	2024.10.22
        *  @Desction 	메뉴 등록
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.22			송원창						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();	//필수 application
        this.fvAddFlag = false;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();
        };

        //화면 load시 초기화
        this.fnInit = function()
        {
        	//this.fnSearchMyMenu();
        };

        //공통코드콤보설정(Combo/Grid)
        this.afterCommCodeLoad = function()
        {
        };

        //공통코드콤보설정 서버조회방식
        this.fnAfterCommCodeLoad = function()
        {
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnSave : 저장 / cfnDel : 삭제 / cfnExecl : 엑셀.. / cfnPrint : 인쇄 / cfnHep : 도움말  / cfnClose : 화면 닫기전 체크)
         * 추가 버튼은 prefix cfn 으로 시작하여 명칭을 만든다.
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function(obj, e)
        {
        	this.fnSearchMyMenu();
        };

        //추가
        this.cfnAdd = function(obj, e)
        {
        	this.fnAdd();
        };

        //삭제
        this.cfnDel = function(obj, e)
        {
        	this.fnDel();
        };

        //저장
        this.cfnSave = function(obj, e)
        {
        	if(this.fvAddFlag)
        	{
        		this.dsMenuList.enableevent = false;
        		this.dsMenuList.filter("dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT");
        		var menuId = this.dsMenuList.getColumn(0, "menuId");
        		this.dsCmmBtnList.updatecontrol = false;
        		this.dsCmmBtnList.enableevent = false;
        		for(var i = 0; i < this.dsCmmBtnList.rowcount; i++)
        		{
        			this.dsCmmBtnList.setColumn(i, "menuId", menuId);
        			this.dsCmmBtnList.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        		this.dsCmmBtnList.updatecontrol = true;
        		this.dsCmmBtnList.enableevent = true;
        		this.dsMenuList.filter("");
        		this.dsMenuList.enableevent = true;
        	}

        	for(var i = 0; i < this.dsMenuList.rowcount; i++)
        	{
        		this.dsMenuList.setColumn(i, "sortSeq", i);
        	}

        	this.fnSaveMyMenu();
        };

        //화면 닫기전 체크
        this.cfnClose = function()
        {
        	trace("업무화면에 수정 사항이 있으면  cfnClose 메소드를 추가 하세요.");
        	//return false;	//수정사항이 있을경우;
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSearchMyMenu = function()
        {
        	this.fnClearDataSet();	//버튼 목록 초기화
        	// 마이메뉴 조회
        	var sSvcId 		= "selectMenuList";
        	var sSvcUrl     = "selectMenuList.do";
        	var sInData     = "";
        	var sOutData    = "dsMenuList=MENULIST";
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
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSaveMyMenu = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "saveMenuList";
        	var sSvcUrl     = "saveMenuList.do";
        	var sInData     = "MENULIST=dsMenuList:U CMMBTNLIST=dsCmmBtnList:U";
        	var sOutData    = "";
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
        		case "selectMenuList":
        			this.fnAddCheckBox(this.grdMenuList);
        			this.fvAddFlag = false;
        			break;
        		case "saveMenuList":
        			this.fnSearchMyMenu();
        			break;
        		case "selectCmmBtnList":

        			break;

        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClearDataSet = function()
        {
        	this.dsCmmBtnList.clearData();
        };

        this.fnAddCheckBox = function(objGrid)
        {
        	var objDs = objGrid.getBindDataset();
        	if(objDs.rowcount > 0)
        	{

        		objDs.enableevent = false;
        		objDs.addColumn("chk")
        		for(var i = 0; i < objDs.rowcount; i++)
        		{
        			objDs.setColumn(i, "chk", 0);
        		}
        		objDs.applyChange();
        		objDs.enableevent = true;
        	}
        };

        this.fnAdd = function()
        {
        	if(!this.fvAddFlag)
        	{
        		this.fnClearDataSet();
        		//if(this.dsMenuList.rowcount == 0) return;

        		var nRow = this.grdMenuList.currentrow;
        		var nStat = this.grdMenuList.getTreeStatus(nRow);

        		//if(nStat == 3)
        		{
        			var rowpoi = this.dsMenuList.rowposition;
        			nRow = this.dsMenuList.insertRow(this.dsMenuList.rowposition+1);
        			this.dsMenuList.setColumn(nRow, "mgrUsyn", "Y");
        			this.dsMenuList.setColumn(nRow, "comYn", "Y");
        			this.dsCmmBtnList.copyData(this.dsCom);

        		}
        		this.fvAddFlag = true;
        	}
        };

        this.fnDel = function()
        {
        	this.dsMenuList.enableevent = false;
        	this.dsMenuList.filter("chk == '1'");
        	if(this.dsMenuList.rowcount > 0)
        	{
        		this.fnClearDataSet();
        		for(var i = this.dsMenuList.rowcount - 1; i > -1; i--)
        		{
        			if (this.dsMenuList.getColumn(i, "chk") == "1" )
        			{
        				this.dsMenuList.deleteRow(i);
        			}
        		}
        		this.fvAddFlag = false;
        	}
        	this.dsMenuList.filter("");
        	this.dsMenuList.enableevent = true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.grdMenuList_oncellclick = function(obj,e)
        {

        	if(e.col == 3 && !this.fvAddFlag)	//메뉴id 클릭시
        	{
        		this.fnClearDataSet();
        		var objDs = obj.getBindDataset();
        		if(objDs.rowcount ==  0) return;

        		if(objDs.getRowType(objDs.rowposition) == Dataset.ROWTYPE_INSERT)
        		{
        			return;
        		}

        		var nRow = obj.getTreeRow(e.row);
        		var nStat = obj.getTreeStatus(nRow);

        		if(nStat == 3)
        		{
        			this.dsMenuId.setColumn(0, "menuId", objDs.getColumn(objDs.rowposition, "menuId"));
        			this.fnSearchCmmBtn();
        		}
        	}
        };

        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	this.fnAdd();
        };

        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	this.fnDel();
        };

        this.dsMenuList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(e.oldrow) == Dataset.ROWTYPE_INSERT)
        	{
        		obj.rowposition = e.oldrow;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.cfnSearch,this);
            this.grdMenuList.addEventHandler("oncellclick",this.grdMenuList_oncellclick,this);
            this.divGridBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divGridBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.dsMenuList.addEventHandler("onrowposchanged",this.dsMenuList_onrowposchanged,this);
        };
        this.loadIncludeScript("ADMCOM0102U.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
