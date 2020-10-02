var editor;
require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        editor = monaco.editor.create(document.getElementById('container'), {
            value: [
                'function x() {',
                '\tconsole.log("Hello world!");',
                '}'
            ].join('\n'),
            language: 'javascript',
            theme: "vs-dark"   
        });
    });
function MoveRun(){
    
    if(CodeCheck()){
        var code = editor.getValue();
        localStorage.setItem("main",code);
        location.href = "run.html"
    }

    //location.href = "run.html"
}
function CodeCheck(){
    var CC = document.getElementById("CodeConsole");
    CC.value = "takaysu";
    code = editor.getValue();
    var SearchWord = ['import','require']


    if (/import|require|banana/.test(code)) {
        CC.value="不正な文字が含まれています";
        return false;
    }
    return true;
}