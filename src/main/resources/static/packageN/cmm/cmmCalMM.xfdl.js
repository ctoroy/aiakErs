(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalMM");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(96,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calYM","0","0","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","25","185","216",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("wheat");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"46","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("월 선택");
            obj.set_background("slategray");
            obj.set_color("white");
            obj.set_font("bold 14pt \"맑은 고딕\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_textAlign("left");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnBefore","5","50","21","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("<");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"12","21","21","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_text("X");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"50","21","21","5",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text(">");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staYYYY","26","50",null,"21","26",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("9999");
            obj.set_textAlign("center");
            obj.set_font("bold 12pt \"맑은 고딕\"");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn1","5","81","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("01");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn2","50","81","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("02");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn3","95","81","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("03");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn4","140","81","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("04");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn5","5","126","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("05");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn6","50","126","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("06");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn7","95","126","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("07");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn8","140","126","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("08");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn9","5","171","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("09");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn10","50","171","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("10");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn11","95","171","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("11");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn12","140","171","40","40",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("12");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",96,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalMM.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmCalMM (공통 월달력)
        *  @FileName 		cmmCalMM.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.03.09
        *  @Desction         메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *  2017.10.17     	kyk       	           주석 정비
        *  2017.10.26     	soojeong 	           주석 정비및 메세지팝업 공통으로 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvToday;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);//초기화[필수]

        	this.fvToday = this.gfnGetDate(); //오늘날자세팅
        	this.fnInit();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calYM.set_value("");
        };

        /**
        * @description  컴포넌트 날짜 값 호출
        */
        this.fnGetValue = function()
        {
        	var rtn = this.calYM.value.substr(0,6);
        	return rtn;
        };

        /**
        * @description   컴포넌트 날짜 값 셋팅
        */
        this.fnSetValue = function(sDate)
        {
        	this.calYM.set_value(sDate);
        };

        /**
        * @description    컴포넌트 enable 셋팅
        */
        this.fnSetEnable = function(bValue)
        {
        	this.calYM.set_enable(bValue);
        };

        /**
        * @description    컴포넌트 Readonly 셋팅
        */
        this.fnSetReadonly = function(bValue)
        {
        	this.calYM.set_readonly(bValue);
        };

        /**
        * @description    컴포넌트 필수 css 셋팅
        */
        this.fnSetEssential = function(bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue){
        		this.calYM.set_background("yellow");
        	}else{
        		this.calYM.set_background("");
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calYM_ondropdown = function(obj,e)
        {
        	var sDate = this.calYM.value;
        	if( this.gfnIsNull(sDate) ) sDate = this.fvToday;

        	this.pdvCal.form.staYYYY.set_text(sDate.substr(0,4));

        	var oForm = this.parent.parent;
        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        };

        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btnBefore_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.set_text(sDate - 1 );

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var sDate =nexacro.toNumber( this.pdvCal.form.staYYYY.text);
        	this.pdvCal.form.staYYYY.set_text(sDate + 1 );
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = this.pdvCal.form.staYYYY.text + obj.text;
        	this.calYM.set_value(rtn);
        	this.pdvCal.closePopup();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calYM.addEventHandler("ondropdown",this.calYM_ondropdown,this);
            this.pdvCal.form.btnBefore.addEventHandler("onclick",this.pdvCal_btnBefore_onclick,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.pdvCal.form.btn1.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn2.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn3.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn4.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn5.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn6.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn7.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn8.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn9.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.pdvCal.form.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
        };
        this.loadIncludeScript("cmmCalMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
