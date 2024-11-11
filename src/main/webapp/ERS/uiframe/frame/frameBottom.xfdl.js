(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBottom");
            this.set_titletext("frameBottom");
            this.set_background("yellow");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,23);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","30","0","680","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회가 완료되었습니다.");
            obj.set_cssclass("sta_BF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,"0","250","23","109",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'#000000\'>홍길동</fc>님 오늘도 희망찬 하루 되세요! ");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_BF_User");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","Static00_00_00:0","0","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2024-10-07");
            obj.set_cssclass("sta_BF_Date");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,23,this,function(p){});
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
        this.loadIncludeScript("frameBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
