(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmColumnHide");
            this.set_titletext("그리드컬럼숨김");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"columnText\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"columnIndex\" type=\"STRING\" size=\"256\"/><Column id=\"body\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","15","15",null,"350","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFilter");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"225\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"컬럼선택\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","104","377","43","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","150","377","43","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","15","15","400",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("mediumturquoise");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0",null,"300","15",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("salmon");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"15","15","400","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("mediumturquoise");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","88",null,"124","12",null,"38",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("salmon");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("12px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","300","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("salmon");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_opacity("0.50");
            obj.set_text("15\r\npx");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","330","22","339","228",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,415,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmColumnHide.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmColumnHide
        *  @FileName 		cmmColumnHide.xfdl
        *  @Creator 		soojeong
        *  @CreateDate 		2017.10.31
        *  @Desction        그리드 컬럼 숨기기/보이기 공통팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.10.31     	soojeong 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fvTargetGrid; 	  //대상그리드 OBJECT
        this.fvTargetDataset; //대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	//초기값 설정
        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;
        	this.fvTargetDataset = this.fvTargetGrid.getBindDataset();
        	this.fnGetHeadText();
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
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {
        	this.grdList.set_enableredraw(false);
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0; i<this.fvTargetGrid.getCellCount("Body"); i++)
            {
                if( this.fvTargetGrid.getCellProperty("Body", i, "displaytype") != "image" )
                {
        			var sText = this.fvTargetGrid.getCellProperty("Body", i, "text");
        			if( sText == "bind:gridcmmcheck") continue; //공통체크박스 제외
        			//바인드되지않은 컬럼제외
        			var sBind;
        			if ( this.gfnIsNull(sText) == false ){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.dsFilter.addRow();

        				this.dsFilter.setColumn(nrow, "body", sText);
        				this.dsFilter.setColumn(nrow, "columnIndex", i);

        				var chkval = 1;
        				var nSize = this.fvTargetGrid.getFormatColSize(i);
        				if( nSize == 0 ) chkval = 0;
        				this.dsFilter.setColumn(nrow, "chk", chkval);
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var i=0;i<this.fvTargetGrid.getCellCount("Head");i++)
            {
                var title  = this.fvTargetGrid.getCellProperty("Head", i,   "text");
                var col    = this.fvTargetGrid.getCellProperty("Head", i,   "col");
                var body   = this.fvTargetGrid.getCellProperty("Body", col, "text");


                var nrow = this.dsFilter.findRow("body", body);
                if( nrow != -1 )
                {
                    this.dsFilter.setColumn(nrow, "columnIndex", col);
                    this.dsFilter.setColumn(nrow, "columnText",  title);
                }
            }
        	this.grdList.set_enableredraw(true);
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close()
        };

        this.btnOK_onclick = function(obj,e)
        {
        	this.grd00.set_formats(this.fvTargetGrid.orgformat2);
        	this.fvTargetGrid.set_formats("<Formats>" + this.fvTargetGrid.orgformat + "</Formats>");
        	this.fvTargetGrid.set_enableredraw(false);

        	var nRowCnt = this.dsFilter.getRowCount();
        	for( var i=0; i<nRowCnt; i++)
        	{
        		var nChk = this.dsFilter.getColumn(i, "chk");
        		var colidx = nexacro.toNumber(this.dsFilter.getColumn(i, "columnIndex"));
        		var nSize= 0;
        		if(nChk == 1){
        			var orgText = this.fvTargetGrid.getCellProperty("Head", colidx, "text");
        			for( var j=0; j< this.grd00.getCellCount("Head"); j++){
        				var scompare = this.grd00.getCellProperty("Head", j, "text");
        				if( orgText == scompare ) nSize = this.grd00.getFormatColSize(i);
        			}
        		}
        		this.fvTargetGrid.setFormatColProperty( colidx, "size", nSize );
        	}
        	this.fvTargetGrid.set_enableredraw(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("cmmColumnHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
