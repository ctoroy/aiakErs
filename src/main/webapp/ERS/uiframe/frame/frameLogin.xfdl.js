(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameLogin");
            this.set_titletext("login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divLogin","330.00","110","331","354",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","111","130",null,"40","10",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassword","111","175",null,"40","10",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","10.00","280",null,"50","10",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("Login");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta00","10","130","80","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("ID");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta01","10","179","80","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("Pass");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"60","0",null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("AIA");
            obj.set_font("bold 36px \"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","0",null,"84","30",null,"98",null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("아이디저장");
            obj.set_cssclass("chk_LOGIN_Id");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLogin.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	frameLogin.xfdl
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
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	this.fnDivLoginResize();
        	this.fnGetPassword();
        };

        /**
         * @description 화면 리사이징
         */
        this.frameLogin_onsize = function(obj,e)
        {
        	this.fnDivLoginResize();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnGetBaseInfo = function ()
        {
        	//공통코드
        	var strSvcId    = "SearchBaseInfo";
        	//var strSvcUrl   = "SearchBaseInfo.do";
        	var strSvcUrl   = "selectMenuList.do";
        	var inData      = "";
        	//var outData     = "gdsCommCode=dsComboData gdsMessage=dsMessage gdsMyMenu=dsMyMenu gdsMenu=dsMenu gdsAddBtn=dsAddBtn";
        	var outData     = "gdsMenu=MENULIST";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.fnLogin = function ()
        {
        	this.divLogin.form.edtPassword.updateToDataset();
        	// 정합성 체크
        	this.gfnClearValidation(this.dsCond);
        	this.gfnSetValidation(this.dsCond, "EMP_NO", "사용자ID"	, "required");
        	this.gfnSetValidation(this.dsCond, "USER_PASSWORD", "패스워드"	, "required");
        	if (this.gfnValidation(this.dsCond, "U") == false) return;

        	//데이터셋 세팅
        	this.gfnSetLoginLogDataset();

        	//로그인
        	var strSvcId    = "Login";
        	var strSvcUrl   = "Login.do";
        	var inData      = "dsCond=dsCond gdsLoginLog=gdsLoginLog";
        	var outData     = "gdsUser=dsLoginUser dsLoginResult=dsLoginResult";
        	var strArg      = "sSytmFlagCd="+nexacro.getApplication().gvSytmFlagCd;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "SearchBaseInfo":
        			// 로그인 시 비밀번호가 0701일 경우 비밀번호 변경창 호출
        // 			if(this.dsCond.getColumn(0, "USER_PASSWORD") == "0701")
        // 			{
        // 				var sTitle = "비밀번호 변경 팝업";
        // 				var objArg = {};
        //
        // 				var objOption = {title:sTitle,
        // 					titlebar:true
        // 					};
        // 				var sPopupCallBack = "fnUserSettingCallback";
        // 				this.gfnOpenPopup( "frmUserSetting", "frame::frmUserSetting.xfdl", objArg, sPopupCallBack, objOption);
        // 				return;
        // 			}
        			this.fnGoMain();
        			break;
        		case "Login" :
        			this.fnSetLoginResult(nErrCd,sErrMsg);
        			break;
        		case "fcmProvider":
        			var obj = JSON.parse(this.dsFcmInOut.getColumn(0,"RESULTS"));
        			trace(obj.success);
        			trace(obj.results[0].message_id );
        			break;
        		case "apnsProvider":
        			if (this.dsFcmInOut.getColumn("STATUSCODE") != 200)
        			{
        				trace(this.dsFcmInOut.saveXML());
        				var objJson = this.dsFcmInOut.getColumn(0, "RESPONSEBODY");
        				trace(JSON.parse(objJson).reason);
        			}
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 로그인 결과 세팅
         */
        this.fnSetLoginResult = function (nErrCd,sErrMsg)
        {
        	if(nErrCd == -200) {
        		this.gfnAlert("msg.err.tran", [sErrMsg]);
        		return;
        	} else if(nErrCd == 0) {
        		var sThemeId = this.objApp.gdsUser.getColumn(0,"THEME_ID");
        		if(!this.gfnIsNull(sThemeId)) {
        			if(sThemeId == "02")
        				nexacro.loadStyle("xcssrc::darkMode.xcss");
        			else
        			    nexacro.loadStyle("xcssrc::lightMode.xcss");
        		}

        		this.fnSavePassword();
        		this.fnGetBaseInfo();
        	}
        };


        /**
         * @description form size 변경시 divLogin size 변경
         */
        this.fnDivLoginResize = function()
        {
          	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round((this.divLogin.getOffsetWidth()) / 2);
          	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divLogin.getOffsetHeight()) / 2);

        	if(nLeft <= 0) {
        		this.divLogin.setOffsetLeft(0);
        	} else {
            	this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        };

        /**
         * @description 로그인 버튼 클릭 이벤트
         */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	//this.fnGoMain();
        	this.fnGetBaseInfo();
        };

        /**
         * @description 메인 화면으로 이동
         */
        this.fnGoMain = function()
        {
        	// 로그인 후처리 & 메인화면으로 이동
        	this.gfnSetLogin();
        };

        /**
         * @description 패스워드가져오기 (저장값)
         */
        this.fnGetPassword = function()
        {
        	var sIdSaveCheck = nexacro.getPrivateProfile("idSaveCheck");
        	this.divLogin.form.chkSaveId.set_value(sIdSaveCheck);
        	if(sIdSaveCheck=="true") {
        		this.divLogin.form.edtUserId.set_value(nexacro.getPrivateProfile("idSave"));
        		this.divLogin.form.edtPassword.setFocus();
        	} else {
        		this.divLogin.form.edtUserId.set_value("");
        		this.divLogin.form.edtUserId.setFocus();
        	}
        };

        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	AIA
        *  @CreateDate 	2024.10.21
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.21			AIA						최초생성
        *******************************************************************************
        */

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.frameLogin_onsize,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
        };
        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
