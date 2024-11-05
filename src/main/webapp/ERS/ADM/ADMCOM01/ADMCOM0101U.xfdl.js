(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ADMCOM0101U");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"grpCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdSettVl1\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl2\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl3\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl4\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl5\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl6\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl7\" type=\"STRING\" size=\"32\"/><Column id=\"cmnCd\" type=\"STRING\" size=\"32\"/><Column id=\"cmnCdnm\" type=\"STRING\" size=\"32\"/><Column id=\"crtrId\" type=\"STRING\" size=\"32\"/><Column id=\"grpCd\" type=\"STRING\" size=\"32\"/><Column id=\"mdpsId\" type=\"STRING\" size=\"32\"/><Column id=\"rmk\" type=\"STRING\" size=\"32\"/><Column id=\"sortSeq\" type=\"INT\" size=\"4\"/><Column id=\"sysId\" type=\"STRING\" size=\"32\"/><Column id=\"usyn\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCodeDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdSettVl1\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl2\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl3\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl4\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl5\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl6\" type=\"STRING\" size=\"32\"/><Column id=\"cdSettVl7\" type=\"STRING\" size=\"32\"/><Column id=\"cmnCd\" type=\"STRING\" size=\"32\"/><Column id=\"cmnCdnm\" type=\"STRING\" size=\"32\"/><Column id=\"crtrId\" type=\"STRING\" size=\"32\"/><Column id=\"grpCd\" type=\"STRING\" size=\"32\"/><Column id=\"mdpsId\" type=\"STRING\" size=\"32\"/><Column id=\"rmk\" type=\"STRING\" size=\"32\"/><Column id=\"sortSeq\" type=\"INT\" size=\"4\"/><Column id=\"sysId\" type=\"STRING\" size=\"32\"/><Column id=\"usyn\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuId", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("divSearch");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("staWord","66","20","60","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색어");
            obj.set_border("1px solid");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWord","131","20","140","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuTitle","0","divSearch:10","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공통코드 그룹");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grdComCodeList","0","staMenuTitle:10",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsComCodeList");
            obj.set_cellsizingtype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"그룹코드\"/><Cell col=\"3\" text=\"그룹코드명\"/><Cell col=\"4\" text=\"비고\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"설정값1\"/><Cell col=\"7\" text=\"설정값2\"/><Cell col=\"8\" text=\"설정값3\"/><Cell col=\"9\" text=\"설정값4\"/><Cell col=\"10\" text=\"설정값5\"/><Cell col=\"11\" text=\"설정값6\"/><Cell col=\"12\" text=\"설정값7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:grpCd\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:cmnCdnm\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:rmk\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" text=\"bind:usyn\"/><Cell col=\"6\" text=\"bind:cdSettVl1\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/><Cell col=\"7\" text=\"bind:cdSettVl2\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/><Cell col=\"8\" text=\"bind:cdSettVl3\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/><Cell col=\"9\" text=\"bind:cdSettVl4\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/><Cell col=\"10\" text=\"bind:cdSettVl5\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/><Cell col=\"11\" text=\"bind:cdSettVl6\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/><Cell col=\"12\" text=\"bind:cdSettVl7\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" expr=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuTitle00","2","grdComCodeList:10","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("공통코드 상세");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grdComCodeDetailList","0","staMenuTitle00:10",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsComCodeDetailList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"공통코드\"/><Cell col=\"3\" text=\"공통코드명\"/><Cell col=\"4\" text=\"비고\"/><Cell col=\"5\" text=\"시스템ID\"/><Cell col=\"6\" text=\"정렬순서\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"설정값1\"/><Cell col=\"9\" text=\"설정값2\"/><Cell col=\"10\" text=\"설정값3\"/><Cell col=\"11\" text=\"설정값4\"/><Cell col=\"12\" text=\"설정값5\"/><Cell col=\"13\" text=\"설정값6\"/><Cell col=\"14\" text=\"설정값7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:cmnCd\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:cmnCdnm\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:rmk\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:sysId\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:sortSeq\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" text=\"bind:usyn\"/><Cell col=\"8\" text=\"bind:cdSettVl1\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:cdSettVl2\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:cdSettVl3\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:cdSettVl4\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:cdSettVl5\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:cdSettVl6\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:cdSettVl7\" displaytype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &apos;editcontrol&apos;  : &apos;normal&apos;\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","600","11","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","750","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","890","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","1030","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnInsert",null,"401","127","30","125",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","btnInsert:5","401","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ADMCOM0101U.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	SCC01/SCC010102U.xfdl
        *  @Creator 	송원창
        *  @CreateDate 	2024.10.28
        *  @Desction 	공통코드
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.28			송원창						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();	//필수 application
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
        	this.fnSearch();
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
        	this.fnSaveComCode();
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
         * @description 공통코드 조회 트랜잭션
         */
        this.fnSearchComCode = function()
        {

        	// 마이메뉴 조회
        	var sSvcId 		= "selectComCodeList";
        	var sSvcUrl     = "selectComCodeList.do";
        	var sInData     = "dsIn=dsCond";
        	var sOutData    = "dsComCodeList=COMCODELIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 	// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 			// trabsaction을 요청할 주소
        						sInData , 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 			// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  	// 통신방법 정의 [생략가능]
        };

        /**
         * @description 공통코드 조회 트랜잭션
         */
        this.fnSearchComCodeDetail = function()
        {

        	// 마이메뉴 조회
        	var sSvcId 		= "selectComCodeDetailList";
        	var sSvcUrl     = "selectComCodeDetailList.do";
        	var sInData     = "dsIn=dsCond";
        	var sOutData    = "dsComCodeDetailList=COMCODEDETAILLIST";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 	// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 			// trabsaction을 요청할 주소
        						sInData , 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 			// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  	// 통신방법 정의 [생략가능]
        };

        /**
         * @description 마이메뉴 조회 트랜잭션
         */
        this.fnSaveComCode = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "saveComCodeList";
        	var sSvcUrl     = "saveComCodeList.do";
        	var sInData     = "COMCODELIST=dsComCodeList:U COMCODEDETAILLIST=dsComCodeDetailList:U";
        	var sOutData    = "";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction( sSvcId , 	// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 			// trabsaction을 요청할 주소
        						sInData , 			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 			// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 				// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  	// 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId)
        	{
        		case "selectComCodeList":
        			this.fnAddCheckBox(this.grdComCodeList);
        			this.fnComDetatil();
        			break;
        		case "selectComCodeDetailList":
        			this.fnAddCheckBox(this.grdComCodeDetailList);
        			break;
        		case "saveComCodeList":
        			this.fnSearch();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsCond.setColumn(0, "grpCd", this.divSearch.form.edtWord.value);
        	this.fnSearchComCode();
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

        this.fnClearDataSet = function()
        {
        	this.dsComCodeDetailList.clearData();
        };

        this.fnAdd = function()
        {
        	this.fnClearDataSet();
        	this.dsComCodeList.addRow();
        };

        this.fnChkDel = function(objds)
        {
        	objds.enableevent = false;
        	objds.filter("chk == '1'");
        	if(objds.rowcount > 0)
        	{
        		for(var i = objds.rowcount - 1; i > -1; i--)
        		{
        			if (objds.getColumn(i, "chk") == "1" )
        			{
        				objds.deleteRow(i);
        			}
        		}
        	}
        	objds.filter("");
        	objds.enableevent = true;
        };

        this.fnComDetatil = function()
        {
        	this.dsCond.setColumn(0, "grpCd", this.dsComCodeList.getColumn(this.dsComCodeList.rowposition, "grpCd"));
        	this.fnSearchComCodeDetail();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnInsert_onclick = function(obj,e)
        {
        	if(this.dsComCodeList.rowcount > 0)
        	{
        		var nRow = this.dsComCodeDetailList.addRow();
        		this.dsComCodeDetailList.setColumn(nRow, "grpCd", this.dsComCodeList.getColumn(this.dsComCodeList.rowposition, "grpCd"));
        	}
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	this.fnChkDel(this.dsComCodeDetailList);
        };

        this.grdComCodeList_oncellclick = function(obj,e)
        {
        	this.fnComDetatil();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdComCodeList.addEventHandler("oncellclick",this.grdComCodeList_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.cfnSearch,this);
            this.btn01.addEventHandler("onclick",this.cfnAdd,this);
            this.btn02.addEventHandler("onclick",this.cfnDel,this);
            this.btn03.addEventHandler("onclick",this.cfnSave,this);
            this.btnInsert.addEventHandler("onclick",this.btnInsert_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
        };
        this.loadIncludeScript("ADMCOM0101U.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
