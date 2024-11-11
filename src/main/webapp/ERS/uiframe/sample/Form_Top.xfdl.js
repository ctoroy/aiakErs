(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,43);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mdi", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">페이지타이틀</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">페이지타이틀</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">페이지타이틀</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">페이지타이틀</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">페이지타이틀</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">페이지타이틀</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">페이지타이틀</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","0","0",null,"43","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","58","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","34","0","30","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_LogoBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","64","0","30","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","101","0","70","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_LogoTxt");
            obj.set_text("ERS");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","320","0","43","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_Close");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","320","50","43","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_Open");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","393","7","40","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_Home");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","393","47","40","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_HomeS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","Button00_01:0","0",null,"43","183",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","7","184","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_TF_MenuS");
            obj.set_text("페이지타이틀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","Button00_01:-28","16","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_TabClose");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","186","18","1","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MDI_Line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","188","7","184","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_text("페이지타이틀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","344","16","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_TabClose");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","374","18","1","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MDI_Line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","376","7","184","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_text("페이지타이틀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","532","16","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_TabClose");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","562","18","1","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_MDI_Line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","564","7","184","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_text("페이지타이틀");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","720","16","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_TabClose");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","750","18","1","17",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MDI_Line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"6","32","31","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"6","32","31","70",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00",null,"6","32","31","110",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_Right");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00",null,"6","32","31","150",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_Left");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00",null,"43","255","200","30",null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_mdi");
            obj.set_cssclass("grd_MDI_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"201\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column1\" tooltiptext=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_TF_Delete\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,43,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.PopupDiv00.form.Grid00.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenMenu_oncellclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
