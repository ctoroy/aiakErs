if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::ers");
        this.set_datatyperule("2.0");
        this.set_filesecurelevel("all");
        this.set_networksecurelevel("all");
        this.set_userfontid("font::SpoqaHanSansNeo.xfont");
    };
    env.on_initEvent = function ()
    {
        // add event handler
        this.addEventHandler("onerror",this.Environment_onerror,this);
    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
        nexacro._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");
        nexacro._addService("svcUrl", "JSP", "http://localhost:8080/uiadapter/", "none", null, "", "0", "0");
        nexacro._addService("ESRlib", "js", "./nexacrolib/component/ERSLib/", "none", null, "", "0", "0");
        nexacro._addService("richtexteditorLib", "file", "./richtexteditorLib/", "session", null, "", "0", "0");
        nexacro._addService("frame", "form", "./uiframe/frame/", "session", null, "", "0", "0");
        nexacro._addService("common", "form", "./uiframe/common/", "session", null, "", "0", "0");
        nexacro._addService("sample", "form", "./uiframe/sample/", "session", null, "", "0", "0");
        nexacro._addService("richtexteditor", "form", "./richtexteditor/", "session", null, "", "0", "0");
        nexacro._addService("SCC01", "form", "./SCC01/", "session", null, "", "0", "0");
        nexacro._addService("ADMCOM01", "form", "./ADM/ADMCOM01/", "session", null, "", "0", "0");
        nexacro._addService("ADMCOM02", "form", "./ADM/ADMCOM02/", "session", null, "", "0", "0");
        nexacro._addService("ADMCOM03", "form", "./ADM/ADMCOM03/", "session", null, "", "0", "0");
        nexacro._addService("ADMCOM09", "form", "./ADM/ADMCOM09/", "session", null, "", "0", "0");
        nexacro._addService("ADMCOM07", "form", "./ADM/ADMCOM07/", "session", null, "", "0", "0");
        nexacro._addService("ADMCOM08", "form", "./ADM/ADMCOM08/", "session", null, "", "0", "0");
        nexacro._addService("MNUBGT01", "form", "./MNU/MNUBGT01/", "session", null, "", "0", "0");
        nexacro._addService("MNUBGT02", "form", "./MNU/MNUBGT02/", "session", null, "", "0", "0");
        nexacro._addService("MNUBGT03", "form", "./MNU/MNUBGT03/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
        		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript"},
        		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript"},
        		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript"},
        		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evMessagePopup", "true");
        nexacro.setEnvironmentVariable("evQuickView", "Y");
        nexacro.setEnvironmentVariable("evSytmFlagCd", "PC");
        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information

	
    // User Script
    env.registerScript("environment.xml", function() {

    this.Environment_onerror = function(obj,e)
    {
    	switch(e.statuscode)
    	{
    		case 10499:	//화면 로드 실패시
    			if(e.errorobj)
    			{
    				e.errorobj.gfnAlert("msg.general", [e.errormsg], "", function(id, msg) {
    					this.close();
    				});
    			}
    			break;
    		default:
    	}
    // 	trace("Environment_onerror errordata", e.errordata);
    // 	trace("Environment_onerror errormsg", e.errormsg);
    // 	trace("Environment_onerror errorobj", e.errorobj);
    // 	trace("Environment_onerror errortype", e.errortype);
    // 	trace("Environment_onerror eventid", e.eventid);
    // 	trace("Environment_onerror locationuri", e.locationuri);
    // 	trace("Environment_onerror requesturi", e.requesturi);
    // 	trace("Environment_onerror statuscode", e.statuscode);
    };
    });
					
    env = null;
    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
