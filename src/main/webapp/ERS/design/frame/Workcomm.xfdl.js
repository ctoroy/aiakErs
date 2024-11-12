(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Comm");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1527,49);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","9","190","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("경비 예산 조회");
            obj.set_cssclass("sta_WF_TitleLocation");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","Static00:10","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_BookmarkS");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","btn_01:3","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Open");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","btn_02:3","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Reload");
            this.addChild(obj.name, obj);

            obj = new Button("btn_04","btn_03:3","15","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Save");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","btn_04:10","6","380","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1Depth  >  2Depth  >  3Depth  >  현재화면");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"0","30",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w30");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1527,49,this,function(p){});
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

        };
        this.loadIncludeScript("Workcomm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
