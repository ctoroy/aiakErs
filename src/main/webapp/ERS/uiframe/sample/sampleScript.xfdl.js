(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleScript");
            this.set_titletext("스크립트샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,1520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txa00","0.00","1530",null,null,"470","-340",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_value("/**\n*  AIA 비용관리시스템 시스템\n*  @FileName \tsampleScript.xfdl\n*  @Creator \tAIA\n*  @CreateDate \t2024.10.15\n*  @Desction \n************** 소스 수정 이력 ***********************************************\n* Date\t\t\t\t\tModifier\t\t\t\t\tDescription\n*******************************************************************************\n* 2024.10.15\t\t\tAIA\t\t\t\t\t최초생성\n*******************************************************************************\n*/\n\n/*******************************************************************************************************************************\n * FORM 변수 선언 영역\n*******************************************************************************************************************************/\n\n/*******************************************************************************************************************************\n * FORM EVENT 영역(onload, onbeforeclose..)\n*******************************************************************************************************************************/\nthis.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n{\n\tthis.gfnFormOnload(obj); //필수함수\n};\n\n//공통코드콤보설정(Combo/Grid)\nthis.afterCommCodeLoad = function()\n{\n};\n\n//공통코드콤보설정 서버조회방식\nthis.fnAfterCommCodeLoad = function()\n{\n};\n\n/*******************************************************************************************************************************\n * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnSave : 저장 / cfnDel : 삭제 / cfnExecl : 엑셀.. / cfnPrint : 인쇄 / cfnHep : 도움말  / cfnClose : 화면 닫기전 체크)\n * 추가 버튼은 prefix cfn 으로 시작하여 명칭을 만든다.\n*******************************************************************************************************************************/\n//조회\nthis.cfnSearch = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//추가\nthis.cfnAdd = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//저장\nthis.cfnSave = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//삭제\nthis.cfnDel = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//엑셀\nthis.cfnExcel = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//프린트\nthis.cfnPrint = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//도움말\nthis.cfnHelp = function(obj, e)\n{\n\tthis.gfnAlert(\"msg.general\", [obj.text + \" 버튼입니다.\"]);\n\t//TODO..\n};\n\n//화면 닫기전 체크\nthis.cfnClose = function()\n{\n\ttrace(\"업무화면에 수정 사항이 있으면  cfnClose 메소드를 추가 하세요.\");\n\t//return false;\t//수정사항이 있을경우;\n};\n\n/*******************************************************************************************************************************\n * Transaction 서비스호출 처리 영역\n*******************************************************************************************************************************/\n\n/*******************************************************************************************************************************\n * Callback 영역 (Transaction, popup, message..)\n*******************************************************************************************************************************/\n\n/*******************************************************************************************************************************\n * 사용자 Function 영역\n*******************************************************************************************************************************/\n\n/*******************************************************************************************************************************\n * 각 COMPONENT 별 EVENT 영역\n*******************************************************************************************************************************/\n");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20.00","20","1050","1450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            obj.set_text("<fc v=\'#329632\'>/**\r\n*  AIA 비용관리시스템 시스템\r\n*  @FileName \t$FILE_BASE$.$FILE_EXT$\r\n*  @Creator \tAIA\r\n*  @CreateDate \t$DATE$\r\n*  @Desction   \r\n************** 소스 수정 이력 ***********************************************\r\n* Date\t\t\t\tModifier\t\t\t\t\tDescription\r\n*******************************************************************************\r\n* $DATE$\t\t\t\tAIA\t\t\t\t\t\t최초생성\r\n*******************************************************************************\r\n*/\r\n\r\n/*******************************************************************************************************************************\r\n * FORM 변수 선언 영역\r\n*******************************************************************************************************************************/\r\n\r\n/*******************************************************************************************************************************\r\n * FORM EVENT 영역(onload, onbeforeclose..)\r\n*******************************************************************************************************************************/</fc>\r\nthis.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\r\n{\r\n\tthis.gfnFormOnload(obj); <fc v=\'#329632\'>//필수함수</fc>\r\n\t$end$\r\n};\r\n\r\n<fc v=\'#329632\'>/*******************************************************************************************************************************\r\n * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)\r\n*******************************************************************************************************************************/\r\n//조회</fc>\r\nthis.cfnSearch = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//추가</fc>\r\nthis.cfnAdd = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//저장</fc>\r\nthis.cfnSave = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//삭제</fc>\r\nthis.cfnDel = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//엑셀</fc>\r\nthis.cfnExcel = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//프린트</fc>\r\nthis.cfnPrint = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//도움말</fc>\r\nthis.cfnHelp = function (obj, e)\r\n{\r\n\t<fc v=\'#329632\'>//TODO..</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>//화면 닫기전 체크</fc>\r\nthis.cfnClose = function()\r\n{\r\n\ttrace(\"업무화면에 수정 사항이 있으면  cfnClose 메소드를 추가 하세요.\");\r\n\t<fc v=\'#329632\'>//return false;\t//수정사항이 있을경우;</fc>\r\n};\r\n\r\n<fc v=\'#329632\'>/*******************************************************************************************************************************\r\n * Transaction 서비스호출 처리 영역\r\n*******************************************************************************************************************************/\r\n\r\n/*******************************************************************************************************************************\r\n * Callback 영역 (Transaction, popup, message..)\r\n*******************************************************************************************************************************/\r\n\r\n/*******************************************************************************************************************************\r\n * 사용자 Function 영역\r\n*******************************************************************************************************************************/\r\n\r\n/*******************************************************************************************************************************\r\n * 각 COMPONENT 별 EVENT 영역\r\n*******************************************************************************************************************************/</fc>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,1520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleScript.xfdl", function() {
        /**
        *  AIA 비용관리시스템 시스템
        *  @FileName 	sampleScript.xfdl
        *  @Creator 	AIA
        *  @CreateDate 	2024.10.15
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024.10.15			AIA							최초생성
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

        /**
         * @description 화면 load시 초기화
         */
        this.fnInit = function()
        {
        };

        /**
         * @description 공통코드콤보설정(Combo/Grid)
         */
        this.afterCommCodeLoad = function()
        {
        };

        /**
         * @description 공통코드콤보설정 서버조회방식
         */
        this.fnAfterCommCodeLoad = function()
        {
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnInit : 초기화 / cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnClose : 화면 닫기전 체크)
         * 추가 버튼은 prefix cfn 으로 시작하여 명칭을 만든다.
        *******************************************************************************************************************************/
        /**
         * @description 초기화
         */
        this.cfnInit = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        /**
         * @description 조회
         */
        this.cfnSearch = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        /**
         * @description 추가
         */
        this.cfnAdd = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        /**
         * @description 삭제
         */
        this.cfnDel = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        /**
         * @description 저장
         */
        this.cfnSave = function(obj, e)
        {
        	this.gfnAlert("msg.general", [obj.text + " 버튼입니다."]);
        	//TODO..
        };

        /**
         * @description 화면 닫기전 체크
         */
        this.cfnClose = function()
        {
        	trace("업무화면에 수정 사항이 있으면  cfnClose 메소드를 추가 하세요.");
        	//return false;	//수정사항이 있을경우;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("sampleScript.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
