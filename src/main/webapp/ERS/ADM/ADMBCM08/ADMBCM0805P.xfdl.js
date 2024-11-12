(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ADMBCM0805P");
            this.set_titletext("사원정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"30\"/><Column id=\"empEngNm\" type=\"STRING\" size=\"2000\"/><Column id=\"empNm\" type=\"STRING\" size=\"200\"/><Column id=\"deptRlNm\" type=\"STRING\" size=\"200\"/><Column id=\"lcetNo\" type=\"STRING\" size=\"600\"/><Column id=\"emalAddr\" type=\"STRING\" size=\"200\"/><Column id=\"grad\" type=\"STRING\" size=\"10\"/><Column id=\"dutyTtlNm\" type=\"STRING\" size=\"200\"/><Column id=\"rgntnYn\" type=\"STRING\" size=\"1\"/><Column id=\"chgYn\" type=\"STRING\" size=\"1\"/><Column id=\"grpName\" type=\"STRING\" size=\"50\"/><Column id=\"idNm\" type=\"STRING\" size=\"100\"/><Column id=\"deptCd\" type=\"STRING\" size=\"9\"/><Column id=\"deptNm\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmpCond", this);
            obj._setContents("<ColumnInfo><Column id=\"searchText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRgntnYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">퇴사</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">재직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnEmpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"30\"/><Column id=\"empEngNm\" type=\"STRING\" size=\"2000\"/><Column id=\"empNm\" type=\"STRING\" size=\"200\"/><Column id=\"deptRlNm\" type=\"STRING\" size=\"200\"/><Column id=\"lcetNo\" type=\"STRING\" size=\"600\"/><Column id=\"emalAddr\" type=\"STRING\" size=\"200\"/><Column id=\"grad\" type=\"STRING\" size=\"10\"/><Column id=\"dutyTtlNm\" type=\"STRING\" size=\"200\"/><Column id=\"rgntnYn\" type=\"STRING\" size=\"1\"/><Column id=\"chgYn\" type=\"STRING\" size=\"1\"/><Column id=\"grpName\" type=\"STRING\" size=\"50\"/><Column id=\"idNm\" type=\"STRING\" size=\"100\"/><Column id=\"deptCd\" type=\"STRING\" size=\"9\"/><Column id=\"deptNm\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staEmpList","25","78","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEmpList","20","116",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsEmpList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:empNo\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:empNm\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:deptNm\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:rgntnYn\" displaytype=\"combotext\" combodataset=\"dsRgntnYn\" combocodecol=\"code\" combodatacol=\"data\"/></Band></Format></Formats>");
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

            obj = new Div("divSearch","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staEmpNoNm","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사번(성명)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtEmpNoNm","staEmpNoNm:10","12","160","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_Search");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"62","32","20","8",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04_01","20","70","90","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H8");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00_00",null,"109","400","7","24",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

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
        this.registerScript("ADMBCM0805P.xfdl", function() {
        /**
        *  사원정보
        *  @FileName 	ADMBCM08/ADMBCM0805P.xfdl
        *  @Creator 	강성호
        *  @CreateDate 	2024.11.11
        *  @Desction    사원정보 화면
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
        this.ADMBCM0805P_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 초기화
        	this.fnPopupInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 사원 조회 트랜잭션
         */
        this.fnSearchEmpList = function()
        {
        	// 마이메뉴 조회
        	var sSvcId 		= "selectEmpList";
        	var sSvcUrl     = "selectEmpList.do";
        	var sInData     = "dsIn=dsEmpCond";
        	var sOutData    = "dsEmpList=EMPLIST";
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
        		case "selectEmpList":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnPopupInit = function()
        {
        	this.dsEmpCond.clearData();
        	this.dsEmpList.clearData();
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
        	var nRow = this.dsEmpList.rowposition;
        	this.dsRtnEmpInfo.clearData();
        	this.dsRtnEmpInfo.addRow();
        	this.dsRtnEmpInfo.copyRow(0, this.dsEmpList, nRow);
        	this.gfnClosePopup(this.dsRtnEmpInfo.saveJSON());
        // 	var empNo = this.dsEmpList.getColumn(nRow, "empNo");
        // 	var empNm = this.dsEmpList.getColumn(nRow, "empNm");
        //
        // 	var rtnValue = {
        // 	     rtnEmpNo:empNo
        // 		,rtnEmpNm:empNm
        // 	}
        //
        // 	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var nRow = this.dsEmpList.rowposition;
        	this.dsRtnEmpInfo.clearData();
        	this.dsRtnEmpInfo.addRow();
        	this.dsRtnEmpInfo.copyRow(0, this.dsEmpList, nRow);
        	this.gfnClosePopup(this.dsRtnEmpInfo.saveJSON());
        	//this.gfnClosePopup(this.dsRtnEmpInfo);
        // 	var empNo = this.dsEmpList.getColumn(nRow, "empNo");
        // 	var empNm = this.dsEmpList.getColumn(nRow, "empNm");
        // 	var deptNm = this.dsEmpList.getColumn(nRow, "deptNm");
        //
        // 	var rtnValue = {
        // 	     rtnEmpNo:empNo
        // 		,rtnEmpNm:empNm
        // 		,rtnDeptNm:deptNm
        // 		}
        // 	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.dsEmpCond.clearData();
        	this.dsEmpCond.addRow();
        	this.dsEmpCond.setColumn(0, 'searchText', this.divSearch.form.edtEmpNoNm.value);
        	this.fnSearchEmpList();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ADMBCM0805P_onload,this);
            this.grdEmpList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
        };
        this.loadIncludeScript("ADMBCM0805P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
