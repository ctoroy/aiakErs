(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample3");
            this.set_titletext("GridInGrid3Depth");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"APP_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"회계년도\" type=\"STRING\" size=\"256\"/><Column id=\"신청부서\" type=\"STRING\" size=\"256\"/><Column id=\"신청일\" type=\"STRING\" size=\"256\"/><Column id=\"신청자\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">본예산</Col><Col id=\"APP_NUMBER\">2022100538</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.22</Col><Col id=\"신청자\">정경일/81128</Col><Col id=\"Column9\">조정완료:한윤환/2021.11.22</Col><Col id=\"Column10\">예산반영:0624714/2021.11.22</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">추가예산</Col><Col id=\"APP_NUMBER\">2022111111</Col><Col id=\"Column1\">0</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.23</Col><Col id=\"신청자\">김철수/81242</Col><Col id=\"Column9\">조정완료:한윤환/2021.12.01</Col><Col id=\"Column10\">예산반영:0624142/2021.12.01</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">본예산</Col><Col id=\"APP_NUMBER\">2022100539</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.22</Col><Col id=\"신청자\">정경일/81128</Col><Col id=\"Column9\">조정완료:한윤환/2021.11.22</Col><Col id=\"Column10\">예산반영:0624714/2021.11.22</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">추가예산</Col><Col id=\"APP_NUMBER\">2022111112</Col><Col id=\"Column1\">0</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.23</Col><Col id=\"신청자\">김철수/81242</Col><Col id=\"Column9\">조정완료:한윤환/2021.12.01</Col><Col id=\"Column10\">예산반영:0624142/2021.12.01</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">본예산</Col><Col id=\"APP_NUMBER\">2022100540</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.22</Col><Col id=\"신청자\">정경일/81128</Col><Col id=\"Column9\">조정완료:한윤환/2021.11.22</Col><Col id=\"Column10\">예산반영:0624714/2021.11.22</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">추가예산</Col><Col id=\"APP_NUMBER\">2022111113</Col><Col id=\"Column1\">0</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.23</Col><Col id=\"신청자\">김철수/81242</Col><Col id=\"Column9\">조정완료:한윤환/2021.12.01</Col><Col id=\"Column10\">예산반영:0624142/2021.12.01</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">본예산</Col><Col id=\"APP_NUMBER\">2022100541</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.22</Col><Col id=\"신청자\">정경일/81128</Col><Col id=\"Column9\">조정완료:한윤환/2021.11.22</Col><Col id=\"Column10\">예산반영:0624714/2021.11.22</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">추가예산</Col><Col id=\"APP_NUMBER\">2022111114</Col><Col id=\"Column1\">0</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.23</Col><Col id=\"신청자\">김철수/81242</Col><Col id=\"Column9\">조정완료:한윤환/2021.12.01</Col><Col id=\"Column10\">예산반영:0624142/2021.12.01</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">본예산</Col><Col id=\"APP_NUMBER\">2022100542</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.22</Col><Col id=\"신청자\">정경일/81128</Col><Col id=\"Column9\">조정완료:한윤환/2021.11.22</Col><Col id=\"Column10\">예산반영:0624714/2021.11.22</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">추가예산</Col><Col id=\"APP_NUMBER\">2022111115</Col><Col id=\"Column1\">0</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.23</Col><Col id=\"신청자\">김철수/81242</Col><Col id=\"Column9\">조정완료:한윤환/2021.12.01</Col><Col id=\"Column10\">예산반영:0624142/2021.12.01</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">본예산</Col><Col id=\"APP_NUMBER\">2022100543</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.22</Col><Col id=\"신청자\">정경일/81128</Col><Col id=\"Column9\">조정완료:한윤환/2021.11.22</Col><Col id=\"Column10\">예산반영:0624714/2021.11.22</Col><Col id=\"Column1\">0</Col><Col id=\"Column0\">0</Col></Row><Row><Col id=\"상태\">예산반영</Col><Col id=\"구분\">추가예산</Col><Col id=\"APP_NUMBER\">2022111116</Col><Col id=\"Column1\">0</Col><Col id=\"회계년도\">2022</Col><Col id=\"신청부서\">행정)정보서비스팀</Col><Col id=\"신청일\">2021.11.23</Col><Col id=\"신청자\">김철수/81242</Col><Col id=\"Column9\">조정완료:한윤환/2021.12.01</Col><Col id=\"Column10\">예산반영:0624142/2021.12.01</Col><Col id=\"Column0\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"GB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">부서예산</Col><Col id=\"Column2\">24,940,000</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">24,940,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">24,940,000</Col><Col id=\"Column9\">0</Col><Col id=\"Column10\">0</Col><Col id=\"Column0\">0</Col><Col id=\"GB_CODE\">00001</Col></Row><Row><Col id=\"구분\">기관예산</Col><Col id=\"Column2\">421,100,000</Col><Col id=\"Column3\">124,121,000</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">100,111,000</Col><Col id=\"Column6\">24,10,000</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">100,000</Col><Col id=\"Column10\">0</Col><Col id=\"Column0\">0</Col><Col id=\"GB_CODE\">00002</Col></Row><Row><Col id=\"구분\">배분예산</Col><Col id=\"Column2\">542,415,000</Col><Col id=\"Column3\">123,420,410</Col><Col id=\"Column4\">12,000,000</Col><Col id=\"Column5\">124,000,000</Col><Col id=\"Column6\">41,471,000</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">421,547,000</Col><Col id=\"Column9\">544,048,321</Col><Col id=\"Column0\">0</Col><Col id=\"Column10\">641,481,484</Col><Col id=\"GB_CODE\">00003</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">H지출</Col><Col id=\"Column1\">H자금지출</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-11,000,000</Col><Col id=\"Column7\">-30.6</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">   1800</Col><Col id=\"Column1\">고정자산취득</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">     1810</Col><Col id=\"Column1\">유형고정자산</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">       1815</Col><Col id=\"Column1\">공기구비품대입비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         1315110</Col><Col id=\"Column1\">집기비품</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">   6100</Col><Col id=\"Column1\">의료비용</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-11,000,000</Col><Col id=\"Column7\">-33.4</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">     6310</Col><Col id=\"Column1\">관리운영비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-11,000,000</Col><Col id=\"Column7\">-33.4</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">       6320</Col><Col id=\"Column1\">수선비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-10,000,000</Col><Col id=\"Column7\">-100</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col></Row><Row><Col id=\"Column0\">       6312</Col><Col id=\"Column1\">여비교통비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         6312140</Col><Col id=\"Column1\">여비교통비:기타</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         6320120</Col><Col id=\"Column1\">수선비:건축물</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-10,000,000</Col><Col id=\"Column7\">-100</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">0</Col></Row><Row><Col id=\"Column0\">       6323</Col><Col id=\"Column1\">도서인쇄비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         6323120</Col><Col id=\"Column1\">도서인쇄비:도서</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">       6325</Col><Col id=\"Column1\">회의비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         6325110</Col><Col id=\"Column1\">회의비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">       6330</Col><Col id=\"Column1\">소모품비</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-1,000,000</Col><Col id=\"Column7\">-6</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         6330120</Col><Col id=\"Column1\">소모품비:관리자산</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">0</Col><Col id=\"Column7\">0</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row><Row><Col id=\"Column0\">         6330130</Col><Col id=\"Column1\">소모품비:기타</Col><Col id=\"Column3\">행정)정보서비스팀</Col><Col id=\"Column4\">124,000,000</Col><Col id=\"Column5\">100,000,000</Col><Col id=\"Column6\">-1.000.000</Col><Col id=\"Column7\">-11.6</Col><Col id=\"Column8\">12,000,000</Col><Col id=\"Column9\">110,000,000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdInfo", this);
            obj.set_keystring("S:LEVEL+P_ROW+ROW");
            obj._setContents("<ColumnInfo><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"P_ROW\" type=\"INT\" size=\"256\"/><Column id=\"ROW\" type=\"INT\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_HEIGHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_head","20","100",null,"28","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_scrollbartype("autoindicator none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"26\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"normal\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"신청번호\"/><Cell col=\"5\" text=\"회계년도\"/><Cell col=\"6\" text=\"신청부서\"/><Cell col=\"7\" text=\"신청일\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"조정부서 처리상태\"/><Cell col=\"10\" text=\"승인부서 처리상태\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_body","20","128",null,null,"12","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_formscrollbartype("default fixed");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.div_body.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell displaytype=\"expr:dataset.getColumn(currow,&apos;Column0&apos;)==0?&apos;checkboxcontrol&apos;:none\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"expr:dataset.getColumn(currow,&apos;Column1&apos;)==0?&apos;Unfold&apos;:&apos;Fold&apos;\"/><Cell col=\"2\" text=\"bind:상태\"/><Cell col=\"3\" text=\"bind:구분\"/><Cell col=\"4\" text=\"bind:APP_NUMBER\"/><Cell col=\"5\" text=\"bind:회계년도\"/><Cell col=\"6\" text=\"bind:신청부서\"/><Cell col=\"7\" text=\"bind:신청일\"/><Cell col=\"8\" text=\"bind:신청자\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.div_body.addChild(obj.name, obj);

            obj = new Grid("grd_dept2_temp","1293","310","367","210",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_binddataset("Dataset02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"일반사업\"/><Cell col=\"1\" text=\"승인사업\"/><Cell col=\"2\" text=\"조정예산(출력)\"/><Cell col=\"3\" text=\"일반사업\"/><Cell col=\"4\" text=\"승인사업\"/><Cell col=\"5\" text=\"승인예산(출력)\"/><Cell col=\"6\" text=\"일반사업\"/><Cell col=\"7\" text=\"승인사업\"/></Band><Band id=\"body\"><Cell text=\"bind:Column3\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:Column4\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:Column5\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:Column6\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:Column7\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:Column8\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:Column9\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:Column10\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","15",null,"28","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그리드 IN 그리드");
            obj.set_font("bold 14pt/normal \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta_content","20","35",null,"60","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- 그리드 IN 그리드 표현을 하기 위해선 아래와 같이 여러개의 component를 활용하여 개발 되어야 합니다.");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept1_temp","1293","70","367","210",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"신청예산(출력)\"/><Cell col=\"3\" text=\"일반사업\"/><Cell col=\"4\" text=\"승인사업\"/><Cell col=\"5\" text=\"조정예산(출력)\"/><Cell col=\"6\" text=\"일반사업\"/><Cell col=\"7\" text=\"승인사업\"/><Cell col=\"8\" text=\"승인예산(출력)\"/><Cell col=\"9\" text=\"일반사업\"/><Cell col=\"10\" text=\"승인사업\"/></Band><Band id=\"body\"><Cell displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"1\" text=\"bind:구분\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:Column7\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:Column8\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:Column9\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:Column10\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","682","58","95","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_body.form
            obj = new Layout("default","",0,0,this.div_body.form,function(p){});
            this.div_body.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleGridInGrid3Depth.xfdl", function() {

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        	this.fv_oMainDiv = this.div_body;
        	this.fv_oMainGrid = this.div_body.form.Grid00;
        	this.fv_oMainDs = this.Dataset00;

        	this.fv_sMainKeyColumn = "APP_NUMBER";
        	this.fv_sDeptKeyColumn = "GB_CODE";

        	this.fv_nRowSize = 27;			//Grid Row Size
        	this.fv_nDept1Row;				//main grid 선택된 Row 값
        	this.fv_oDept1Grid = null;
        	this.fv_nDept2tRow;
        	this.fv_sID = "";
        //	this.fv_bSubFlag = false;		//sub grid 활성화 Flag 값
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        	this.fn_onload = function(obj,e){
        		//Main Dataset 조회 함수 호출
        		this.fn_search();
        	};
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        	this.fn_callback = function(sSvcId, sErrorCd, sErrorMessage){
        		if(sSvcId == "mainData"){
        			this.fn_mainGridSizeChange();
        		} else if(sSvcId == "Dept1_Data"){

        			//===== temp source =====
        			var sDataSet = this["ds_"+ this.fv_sID];
        			sDataSet.copyData(this.Dataset01, true);
        			//=======================

        			this.fn_insertDept1Row();
        		} else if(sSvcId == "Dept2_Data"){
        			//===== temp source =====
        			var sDataSet = this["ds_"+ this.fv_sID];
        			sDataSet.copyData(this.Dataset02, true);
        			//=======================

        			this.fn_insertDept2Row();
        		}
        	};
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        	this.fn_search = function(){
        		this.fn_callback("mainData",0,"");
        	};

        	this.fn_searchDept1 = function(){
        		this.fn_createDataset();

        		this.fn_callback("Dept1_Data",0,"");
        	};

        	this.fn_searchDept2 = function(){
        		this.fn_createDataset();

        		this.fn_callback("Dept2_Data",0,"");
        	};
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        	// Dept 1 data 조회후 처리 함수
        	this.fn_insertDept1Row = function(){
        		var nNewRow ;
        		var oDept1Ds = this["ds_"+ this.fv_sID];

        		//1.main Grid Row 추가
        		if((this.fv_oMainDs.getRowCount()-1) > this.fv_nDept1Row){
        			nNewRow = this.fv_oMainDs.insertRow(this.fv_nDept1Row+1);
        		} else {
        			nNewRow = this.fv_oMainDs.addRow();
        		}

        		//Dept1 Grid size 만큼 Row size 변경
        		var nDept1_RowCnt = oDept1Ds.getRowCount();
        		var nHead_Height =  this.fv_nRowSize;
        		//nDept2_HSize = Grid Head Height + (Grid Row Count * Row Height) - (Grid Row Count - 2)
        		var nDept1_HSize = nHead_Height + (nDept1_RowCnt * this.fv_nRowSize) - (nDept1_RowCnt - 2);
        		this.fv_oMainGrid.setRealRowSize(nNewRow,nDept1_HSize+8);

        		//Dept1 Grid 생성
        		var aRect = this.fv_oMainGrid.getCellRect(nNewRow,1);
        		var nLeft = aRect.left;
        		var nTop = aRect.top;
        		var nHeight = nDept1_HSize;
        		var nRight = this.fv_oMainGrid.getOffsetWidth()-(this.fv_oMainGrid.getOffsetWidth() -  5);

        //		this.fn_createGrd(1, nLeft+5, nTop+4, nHeight, nRight);
        		this.fn_createGrd(1, "2.80%", nTop+4, nHeight, nRight);

        		//ds_gridInfo에 추가  "2.68%"
        		this.fn_addGridInfo(1, 0, this.fv_nDept1Row, this.fv_oMainGrid.id, nDept1_HSize);

        		//main grid size 변경
        		this.fn_mainGridSizeChange();

        		//전체 Grid  위치 조정 함수 호출
        		this.fn_gridALLMove();
        	};

        	this.fn_insertDept2Row = function(){
        		var nNewRow ;
        		var oPGrid = this.fv_oDept1Grid;
        		var oPDs = this[oPGrid.binddataset]
        		var oDept2Ds = this["ds_"+ this.fv_sID];

        		//1.main Grid Row 추가
        		var bLastRow = false;
        		if((oPDs.getRowCount()-1) > this.fv_nDept2Row){
        			nNewRow = oPDs.insertRow(this.fv_nDept2Row+1);
        		} else {
        			nNewRow = oPDs.addRow();
        			bLastRow = true;
        		}
        		oPDs.setColumn(nNewRow, 0, 2);

        		//Dept1 Grid size 만큼 Row size 변경
        		var nDept2_RowCnt = oDept2Ds.getRowCount();
        		var nHead_Height =  this.fv_nRowSize;
        		//nDept2_HSize = Grid Head Height + (Grid Row Count * Row Height) - (Grid Row Count - 2)
        		var nDept2_HSize = nHead_Height + (nDept2_RowCnt * this.fv_nRowSize) - (nDept2_RowCnt -2);

        		oPGrid.setRealRowSize(nNewRow,nDept2_HSize + 8);

        		//Dept2 Grid 생성
        		var aRect = oPGrid.getCellRect(nNewRow,1);
        		var nLeft = oPGrid.getOffsetLeft() + aRect.left;
        		var nTop = oPGrid.getOffsetTop() + aRect.top;
        		if(bLastRow){
        			nTop = nTop + this.fv_nRowSize;
        		}
        		var nHeight = nDept2_HSize;
        		//var nHeight = 496;
        		var nRight = oPGrid.getOffsetWidth()-(oPGrid.getOffsetWidth() -  10);

        //		this.fn_createGrd(2, nLeft+5, nTop+4, nHeight, nRight);
        		this.fn_createGrd(2, "7.00%", nTop+4, nHeight, nRight);

        		//ds_gridInfo에 추가
        		var nAppNumber = oPGrid.id.replace("grd_","");
        		var nFindRow = this.Dataset00.findRow(this.fv_sMainKeyColumn ,nAppNumber);
        		this.fn_addGridInfo(2, nFindRow, this.fv_nDept2Row, oPGrid.id, nDept2_HSize);

        		//dept grid size 변경
        		this.fn_deptGridSizeChange(oPGrid);

        		//main grid size 변경
        		this.fn_mainGridSizeChange();

        		//전체 Grid  위치 조정 함수 호출
        		this.fn_gridALLMove();
        	};

        	//Dept1 Grid 생성 함수
        	this.fn_createGrd = function (nFlag, nLeft, nTop, nHeight, nRight)
        	{
        		var oGrid = new Grid();
        		oGrid.init("grd_"+this.fv_sID, nLeft, nTop, null, nHeight, nRight, null);

        		this.fv_oMainDiv.addChild("grd_"+this.fv_sID, oGrid);
        		oGrid.set_binddataset("ds_"+ this.fv_sID);
        		if(nFlag == 1){
        			oGrid.set_formats(this.grd_dept1_temp.formats);
        			oGrid.setCellProperty("body", 0 , "cssclass", "expr:dataset.getColumn(currow,'"+"Column0"+"')==0?'Unfold':dataset.getColumn(currow,'"+"Column0"+"')==1?'Fold':''");  //buttoncontrol
        			oGrid.setCellProperty("body", 0 , "displaytype", "expr:dataset.getColumn(currow,'"+"Column0"+"') < 2 ? 'buttoncontrol' : 'none'");
        			oGrid.setCellProperty("body", 0 , "edittype", "expr:dataset.getColumn(currow,'"+"Column0"+"') < 2 ? 'buttoncontrol' : 'none'");
        			oGrid.set_extendsizetype("row");
        			oGrid.set_autofittype("col");

        			oGrid.addEventHandler("oncellclick", this.fn_Dept2Oncellclick, this);
        		} else {
        			oGrid.set_formats(this.grd_dept2_temp.formats);
        			oGrid.set_autofittype("col");
        		}
        		oGrid.set_scrollbartype("none none");
        		oGrid.show();
        	};


        	//dept 1 dataset 생성 함수
        	this.fn_createDataset = function(){
        		var sDataSetId = "ds_"+ this.fv_sID;
        		if(this.gfnIsNull(this[sDataSetId])){
        			var oDs = new Dataset();
        			this.addChild(sDataSetId,oDs);
        		}
        	};


        	//dataset 저장 처리
        	this.fn_addGridInfo = function(nLevel, nPRow, nRow, sPGridId, nHeight){
        		var nNewRow = this.ds_grdInfo.addRow();
        		this.ds_grdInfo.setColumn(nNewRow,"LEVEL", nLevel);
        		this.ds_grdInfo.setColumn(nNewRow,"P_ROW", nPRow);
        		this.ds_grdInfo.setColumn(nNewRow,"ROW", nRow);
        		this.ds_grdInfo.setColumn(nNewRow,"GRID_ID", "grd_"+this.fv_sID);
        		this.ds_grdInfo.setColumn(nNewRow,"P_GRID_ID", sPGridId);
        		this.ds_grdInfo.setColumn(nNewRow,"GRID_HEIGHT", nHeight);

        		var sColumnKey = "";
        		var nFindRow = -1;

        		this.ds_grdInfo.filter("LEVEL=='1'");
        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
        			sColumnKey = this.ds_grdInfo.getColumn(i,"GRID_ID").replace("grd_","");
        			nFindRow = this.fv_oMainDs.findRow(this.fv_sMainKeyColumn, sColumnKey);
        			this.ds_grdInfo.setColumn(i, "ROW", nFindRow);
        		}
        		this.ds_grdInfo.filter("");

        		var oDeptDs
        		this.ds_grdInfo.filter("LEVEL=='2'");
        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
        			sDsColumn = this.ds_grdInfo.getColumn(i,"P_GRID_ID").replace("grd_","");
        			oDeptDs = this["ds_"+ sDsColumn];
        			sColumnKey = this.ds_grdInfo.getColumn(i,"GRID_ID").replace("grd_","");
        			nFindRow = oDeptDs.findRow(this.fv_sDeptKeyColumn, sColumnKey);
        			this.ds_grdInfo.setColumn(i, "ROW", nFindRow);
        		}
        		this.ds_grdInfo.filter("");
        	};

        	//main Grid size 변경 함수
        	this.fn_mainGridSizeChange = function(){
        		var oGrid = null;
        		var nAddSize = 0;
        		this.ds_grdInfo.filter("LEVEL=='1'");
        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
         			oGrid = this.fv_oMainDiv.form[this.ds_grdInfo.getColumn(i,"GRID_ID")];
        			nAddSize = nAddSize + nexacro.toNumber(oGrid.getOffsetHeight());
        		}

        		var nChildCnt =  this.ds_grdInfo.getRowCount();
        		this.ds_grdInfo.filter("");

        		//Grid Height 조절을 위한 logic
        		var nGap = (nChildCnt * 10);
        		var nHead_Height = this.fv_nRowSize;
        		var nHeight = 0;
        		if(nChildCnt > 0){
        			//Grid Height = ((Row 수-child Row 수) * Row Height) + child Height + 여백
        			nHeight = ((this.fv_oMainDs.getRowCount() - nChildCnt) * this.fv_nRowSize) + nAddSize + nGap;
        		} else {
        			//Grid Height = (Row 수 * Row Height) + child Height + 여백
        			nHeight = (this.fv_oMainDs.getRowCount() * this.fv_nRowSize) + nAddSize + 6;
        			this.fv_oMainGrid.set_bottom(0);
        		}
        		this.fv_oMainGrid.set_height(nHeight);
        		this.fv_oMainDiv.form.resetScroll();
        	};

        	this.fn_deptGridSizeChange = function(oPGrid){
        		var oPDs = this[oPGrid.binddataset];
        		var nAddSize = 0;
        		var sFilter = "P_GRID_ID=='"+oPGrid.id+"'";
        		this.ds_grdInfo.filter(sFilter);
        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
         			oGrid = this.fv_oMainDiv.form[this.ds_grdInfo.getColumn(i,"GRID_ID")];
        			nAddSize = nAddSize + nexacro.toNumber(oGrid.getOffsetHeight());
        		}

        		var nChildCnt =  this.ds_grdInfo.getRowCount();
        		this.ds_grdInfo.filter("");

        		var nGap = (nChildCnt * 10);
        		var nHead_Height = this.fv_nRowSize;
        		var nHeight = 0;
        		if(nChildCnt > 0){
        			//Grid Height = Head Height + ((Row 수-child Row 수) * Row Height) + child Height + 여백
        			nHeight = nHead_Height + ((oPDs.getRowCount() - nChildCnt) * this.fv_nRowSize) + nAddSize + nGap;
        		} else {
        			//Grid Height = Head Height + ((Row 수-child Row 수) * Row Height) + child Height + 여백
        			nHeight = nHead_Height + (oPDs.getRowCount() * this.fv_nRowSize) + nAddSize;
        		}
        		oPGrid.set_height(nHeight);
        	};

        	//Grid 이동 함수
        	this.fn_gridALLMove = function(){
        		//main grid을 Row size을 원래되로 돌리는 코드
        		for(var i = 0 ; i < this.fv_oMainDs.getRowCount() ; i++){
        			this.fv_oMainGrid.setRealRowSize(i,this.fv_nRowSize);
        		}


        		//dept Grid 위치 이동 logic
        		this.ds_grdInfo.filter("LEVEL=='1'");
        		var aRect = "";
        		var oTagetGrid = null;
        		var nFindRow =-1;
        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
        			nFindRow = this.fv_oMainDs.findRow(this.fv_sMainKeyColumn ,this.ds_grdInfo.getColumn(i,"GRID_ID").replace("grd_",""))+1;
        			aRect = this.fv_oMainGrid.getCellRect(nFindRow, 1);
        			oTagetGrid =  this.fv_oMainDiv.form[this.ds_grdInfo.getColumn(i,"GRID_ID")];
        			oTagetGrid.set_top(aRect.top+4);

        			this.fv_oMainGrid.setRealRowSize(nFindRow,nexacro.toNumber(oTagetGrid.getOffsetHeight())+8);
        		}
        		this.ds_grdInfo.filter("");

        		//dept Grid 위치 이동 logic
        		this.ds_grdInfo.filter("LEVEL=='2'");
        		var aRect = "";
        		var oPGrid = null;
        		var oPDs = null;
        		var oTagetGrid = null;
        		var nFindRow =-1;
        		var nDeptTop = 0;

        		//main grid을 Row size을 원래되로 돌리는 코드
        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
        			oPGrid = this.fv_oMainDiv.form[this.ds_grdInfo.getColumn(i,"P_GRID_ID")];
        			oPDs = this[oPGrid.binddataset];

         			for(var j = 0 ; j < oPDs.getRowCount() ; j++){
        				oPGrid.setRealRowSize(j,this.fv_nRowSize);
        			}
        		}

        		for(var i = 0 ; i < this.ds_grdInfo.getRowCount() ; i++){
        			oPGrid = this.fv_oMainDiv.form[this.ds_grdInfo.getColumn(i,"P_GRID_ID")];
        			oPDs = this[oPGrid.binddataset];

        			nFindRow = oPDs.findRow(this.fv_sDeptKeyColumn,this.ds_grdInfo.getColumn(i,"GRID_ID").replace("grd_",""))+1;
        			aRect = oPGrid.getCellRect(nFindRow, 1);
        			oTagetGrid =  this.fv_oMainDiv.form[this.ds_grdInfo.getColumn(i,"GRID_ID")];
        			nDeptTop = oPGrid.getOffsetTop() + aRect.top + 4;
        			oTagetGrid.set_top(nDeptTop);

        			oPGrid.setRealRowSize(nFindRow,nexacro.toNumber(oTagetGrid.getOffsetHeight())+10);
        		}
        		this.ds_grdInfo.filter("");
        		this.div_body.form.resetScroll();
        	};
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        	//main Grid 확장 버튼 click시 이벤트
          	this.div_body_Grid00_oncellclick = function(obj,e)
         	{
         		var oDataSet = this[obj.binddataset];

         		//Grid, Dataset ID 일부 값
         		this.fv_sID = oDataSet.getColumn(e.row, this.fv_sMainKeyColumn );
        // 		if(e.col==1){
        			//확장,축소 버튼 click
        			if(oDataSet.getColumn(e.row, 1) == 0){
        				//Row 추가를 위한 기준 Row 선택
        				this.fv_nDept1Row = e.row;

        				//1 Dept data 조회
        				this.fn_searchDept1();
        			} else {
        				//축소
        				var sGridId = "grd_"+this.fv_sID;

        				//Dept 2 Grid 존재 여부 확인 있을시 사이즈 체크 후 삭제(여러개 존재 가능)
        				this.ds_grdInfo.filter("P_GRID_ID=='"+sGridId+"'");
        				var oGrid = null;
        				var nCount = this.ds_grdInfo.getRowCount() -1;
        				for(var i = nCount ; i >= 0  ; i--){
        					oGrid = this.div_body.removeChild(this.ds_grdInfo.getColumn(i,"GRID_ID"));
        					oGrid.destroy();

        					this.ds_grdInfo.deleteRow(i);
        				}
        				this.ds_grdInfo.filter("");

        				//Dept 1 Grid 존재 여부 확인 후 사이즈 체크 후 삭제
        				oGrid = this.div_body.removeChild(sGridId);
        				oGrid.destroy();

        				//main Grid Row 삭제 후 사이즈 조정
        				obj.setRealRowSize(e.row+1, this.fv_nRowSize);
        				oDataSet.deleteRow(e.row+1);

        				//Dept1 Grid Data 삭제
        				var nFindRow =this.ds_grdInfo.findRow("GRID_ID", sGridId);
        				this.ds_grdInfo.deleteRow(nFindRow);

        				//Grid00 size 변경
        				this.fn_mainGridSizeChange();

        				//전체 Grid  위치 조정 함수 호출
        				this.fn_gridALLMove();
        			}

        			//버튼 값 변경(토클처리)
        			oDataSet.setColumn(e.row, 1 ,oDataSet.getColumn(e.row,1)==0?1:0);
        //		}
        	};

        	this.fn_Dept2Oncellclick = function(obj, e){
        		this.fv_oDept1Grid = obj;

        		var oDataSet = this[obj.binddataset];
        		//Grid, Dataset ID 일부 값
        		this.fv_sID = oDataSet.getColumn(e.row, this.fv_sDeptKeyColumn);

        		var sValue = oDataSet.getColumn(e.row, "Column0");
        		if(sValue < 2){
        			//확장,축소 버튼 click
        			if(e.col==0){
        				//확장
        				if(oDataSet.getColumn(e.row, 0) == 0){
        					//Row 추가를 위한 기준 Row 선택
        					this.fv_nDept2Row = e.row;

        					//1 Dept data 조회
        					this.fn_searchDept2();
        				} else {
        					//축소
        					var sGridId = "grd_"+this.fv_sID;
        					//Dept 2 Grid 존재 여부 확인 후 사이즈 체크 후 삭제
        					oGrid = this.div_body.removeChild(sGridId);
        					oGrid.destroy();

        					//Dept 1 Row 삭제 후 사이즈 조정
        					obj.setRealRowSize(e.row+1, this.fv_nRowSize);
        					oDataSet.deleteRow(e.row+1);

        					//Dept 2 Grid Data 삭제
        					var nFindRow =this.ds_grdInfo.findRow("GRID_ID", sGridId);
        					this.ds_grdInfo.deleteRow(nFindRow);

        					//
        					this.fn_deptGridSizeChange(obj);

        					//Grid00 size 변경
        					this.fn_mainGridSizeChange();

        					//전체 Grid  위치 조정 함수 호출
        					this.fn_gridALLMove();
        				}
        				//버튼 값 변경(토클처리)
        				oDataSet.setColumn(e.row, 0 ,oDataSet.getColumn(e.row,0)==0?1:0);
        			}
        		}
        	};

        this.fv_visible = true;
        this.btn00_onclick = function(obj,e)
        {
        	var oAllGrid = this.div_body.form.components;
        	var sFlag = false;
        	if(this.fv_visible == true){
        		sFlag = false;
        		this.fv_visible = false;
        	} else {
        		sFlag = true;
        		this.fv_visible = true;
        	}
        	for(var i = 0 ; i < oAllGrid.length ; i++){
        		if(oAllGrid[i].id.indexOf("Grid00")< 0){
        			oAllGrid[i].set_visible(sFlag);
        		}
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.div_body.form.Grid00.addEventHandler("oncellclick",this.div_body_Grid00_oncellclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("SampleGridInGrid3Depth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
