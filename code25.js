gdjs.ReporteNivel5Code = {};
gdjs.ReporteNivel5Code.GDdialogObjects1= [];
gdjs.ReporteNivel5Code.GDdialogObjects2= [];
gdjs.ReporteNivel5Code.GDbotonreinicioObjects1= [];
gdjs.ReporteNivel5Code.GDbotonreinicioObjects2= [];
gdjs.ReporteNivel5Code.GDcaja7Objects1= [];
gdjs.ReporteNivel5Code.GDcaja7Objects2= [];
gdjs.ReporteNivel5Code.GDGameOverObjects1= [];
gdjs.ReporteNivel5Code.GDGameOverObjects2= [];
gdjs.ReporteNivel5Code.GDtxtGanoObjects1= [];
gdjs.ReporteNivel5Code.GDtxtGanoObjects2= [];
gdjs.ReporteNivel5Code.GDcaja3Objects1= [];
gdjs.ReporteNivel5Code.GDcaja3Objects2= [];
gdjs.ReporteNivel5Code.GDcaja5Objects1= [];
gdjs.ReporteNivel5Code.GDcaja5Objects2= [];
gdjs.ReporteNivel5Code.GDCaja2Objects1= [];
gdjs.ReporteNivel5Code.GDCaja2Objects2= [];
gdjs.ReporteNivel5Code.GDbannerObjects1= [];
gdjs.ReporteNivel5Code.GDbannerObjects2= [];
gdjs.ReporteNivel5Code.GDbanner2Objects1= [];
gdjs.ReporteNivel5Code.GDbanner2Objects2= [];
gdjs.ReporteNivel5Code.GDbtnCloseObjects1= [];
gdjs.ReporteNivel5Code.GDbtnCloseObjects2= [];
gdjs.ReporteNivel5Code.GDbtnContinuarObjects1= [];
gdjs.ReporteNivel5Code.GDbtnContinuarObjects2= [];
gdjs.ReporteNivel5Code.GDbtnAdelanteObjects1= [];
gdjs.ReporteNivel5Code.GDbtnAdelanteObjects2= [];
gdjs.ReporteNivel5Code.GDbtnRepeatObjects1= [];
gdjs.ReporteNivel5Code.GDbtnRepeatObjects2= [];
gdjs.ReporteNivel5Code.GDtxtMalObjects1= [];
gdjs.ReporteNivel5Code.GDtxtMalObjects2= [];
gdjs.ReporteNivel5Code.GDtxtCorrectoObjects1= [];
gdjs.ReporteNivel5Code.GDtxtCorrectoObjects2= [];
gdjs.ReporteNivel5Code.GDNewObject4Objects1= [];
gdjs.ReporteNivel5Code.GDNewObject4Objects2= [];
gdjs.ReporteNivel5Code.GDsiguienteObjects1= [];
gdjs.ReporteNivel5Code.GDsiguienteObjects2= [];
gdjs.ReporteNivel5Code.GDVida1Objects1= [];
gdjs.ReporteNivel5Code.GDVida1Objects2= [];
gdjs.ReporteNivel5Code.GDVida2Objects1= [];
gdjs.ReporteNivel5Code.GDVida2Objects2= [];
gdjs.ReporteNivel5Code.GDVida3Objects1= [];
gdjs.ReporteNivel5Code.GDVida3Objects2= [];
gdjs.ReporteNivel5Code.GDPuntajeFinalObjects1= [];
gdjs.ReporteNivel5Code.GDPuntajeFinalObjects2= [];
gdjs.ReporteNivel5Code.GDTiempoFinalObjects1= [];
gdjs.ReporteNivel5Code.GDTiempoFinalObjects2= [];
gdjs.ReporteNivel5Code.GDVidaFinalObjects1= [];
gdjs.ReporteNivel5Code.GDVidaFinalObjects2= [];
gdjs.ReporteNivel5Code.GDtxtScoreObjects1= [];
gdjs.ReporteNivel5Code.GDtxtScoreObjects2= [];
gdjs.ReporteNivel5Code.GDtxtTiempoObjects1= [];
gdjs.ReporteNivel5Code.GDtxtTiempoObjects2= [];
gdjs.ReporteNivel5Code.GDFondoObjects1= [];
gdjs.ReporteNivel5Code.GDFondoObjects2= [];

gdjs.ReporteNivel5Code.conditionTrue_0 = {val:false};
gdjs.ReporteNivel5Code.condition0IsTrue_0 = {val:false};
gdjs.ReporteNivel5Code.condition1IsTrue_0 = {val:false};
gdjs.ReporteNivel5Code.condition2IsTrue_0 = {val:false};
gdjs.ReporteNivel5Code.condition3IsTrue_0 = {val:false};
gdjs.ReporteNivel5Code.conditionTrue_1 = {val:false};
gdjs.ReporteNivel5Code.condition0IsTrue_1 = {val:false};
gdjs.ReporteNivel5Code.condition1IsTrue_1 = {val:false};
gdjs.ReporteNivel5Code.condition2IsTrue_1 = {val:false};
gdjs.ReporteNivel5Code.condition3IsTrue_1 = {val:false};


gdjs.ReporteNivel5Code.mapOfGDgdjs_46ReporteNivel5Code_46GDsiguienteObjects1Objects = Hashtable.newFrom({"siguiente": gdjs.ReporteNivel5Code.GDsiguienteObjects1});gdjs.ReporteNivel5Code.eventsList0x5b7338 = function(runtimeScene) {

{

gdjs.ReporteNivel5Code.GDsiguienteObjects1.createFrom(runtimeScene.getObjects("siguiente"));

gdjs.ReporteNivel5Code.condition0IsTrue_0.val = false;
gdjs.ReporteNivel5Code.condition1IsTrue_0.val = false;
gdjs.ReporteNivel5Code.condition2IsTrue_0.val = false;
{
gdjs.ReporteNivel5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ReporteNivel5Code.mapOfGDgdjs_46ReporteNivel5Code_46GDsiguienteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ReporteNivel5Code.condition0IsTrue_0.val ) {
{
gdjs.ReporteNivel5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ReporteNivel5Code.condition1IsTrue_0.val ) {
{
{gdjs.ReporteNivel5Code.conditionTrue_1 = gdjs.ReporteNivel5Code.condition2IsTrue_0;
gdjs.ReporteNivel5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(36022620);
}
}}
}
if (gdjs.ReporteNivel5Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.ReporteNivel5Code.condition0IsTrue_0.val = false;
{
gdjs.ReporteNivel5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ReporteNivel5Code.condition0IsTrue_0.val) {
gdjs.ReporteNivel5Code.GDPuntajeFinalObjects1.createFrom(runtimeScene.getObjects("PuntajeFinal"));
gdjs.ReporteNivel5Code.GDTiempoFinalObjects1.createFrom(runtimeScene.getObjects("TiempoFinal"));
gdjs.ReporteNivel5Code.GDVidaFinalObjects1.createFrom(runtimeScene.getObjects("VidaFinal"));
{for(var i = 0, len = gdjs.ReporteNivel5Code.GDVidaFinalObjects1.length ;i < len;++i) {
    gdjs.ReporteNivel5Code.GDVidaFinalObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.ReporteNivel5Code.GDTiempoFinalObjects1.length ;i < len;++i) {
    gdjs.ReporteNivel5Code.GDTiempoFinalObjects1[i].setString("7");
}
}{for(var i = 0, len = gdjs.ReporteNivel5Code.GDPuntajeFinalObjects1.length ;i < len;++i) {
    gdjs.ReporteNivel5Code.GDPuntajeFinalObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Entrada.mp3", 1, false, 60, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "fondoN5.mp3", true, 10, 1);
}}

}


{

gdjs.ReporteNivel5Code.GDVidaFinalObjects1.createFrom(runtimeScene.getObjects("VidaFinal"));

gdjs.ReporteNivel5Code.condition0IsTrue_0.val = false;
gdjs.ReporteNivel5Code.condition1IsTrue_0.val = false;
{
gdjs.ReporteNivel5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.ReporteNivel5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ReporteNivel5Code.GDVidaFinalObjects1.length;i<l;++i) {
    if ( gdjs.ReporteNivel5Code.GDVidaFinalObjects1[i].getString() == "1" ) {
        gdjs.ReporteNivel5Code.condition1IsTrue_0.val = true;
        gdjs.ReporteNivel5Code.GDVidaFinalObjects1[k] = gdjs.ReporteNivel5Code.GDVidaFinalObjects1[i];
        ++k;
    }
}
gdjs.ReporteNivel5Code.GDVidaFinalObjects1.length = k;}}
if (gdjs.ReporteNivel5Code.condition1IsTrue_0.val) {
gdjs.ReporteNivel5Code.GDVida2Objects1.createFrom(runtimeScene.getObjects("Vida2"));
gdjs.ReporteNivel5Code.GDVida3Objects1.createFrom(runtimeScene.getObjects("Vida3"));
{for(var i = 0, len = gdjs.ReporteNivel5Code.GDVida3Objects1.length ;i < len;++i) {
    gdjs.ReporteNivel5Code.GDVida3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ReporteNivel5Code.GDVida2Objects1.length ;i < len;++i) {
    gdjs.ReporteNivel5Code.GDVida2Objects1[i].hide();
}
}}

}


{

gdjs.ReporteNivel5Code.GDVidaFinalObjects1.createFrom(runtimeScene.getObjects("VidaFinal"));

gdjs.ReporteNivel5Code.condition0IsTrue_0.val = false;
gdjs.ReporteNivel5Code.condition1IsTrue_0.val = false;
{
gdjs.ReporteNivel5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.ReporteNivel5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ReporteNivel5Code.GDVidaFinalObjects1.length;i<l;++i) {
    if ( gdjs.ReporteNivel5Code.GDVidaFinalObjects1[i].getString() == "2" ) {
        gdjs.ReporteNivel5Code.condition1IsTrue_0.val = true;
        gdjs.ReporteNivel5Code.GDVidaFinalObjects1[k] = gdjs.ReporteNivel5Code.GDVidaFinalObjects1[i];
        ++k;
    }
}
gdjs.ReporteNivel5Code.GDVidaFinalObjects1.length = k;}}
if (gdjs.ReporteNivel5Code.condition1IsTrue_0.val) {
gdjs.ReporteNivel5Code.GDVida3Objects1.createFrom(runtimeScene.getObjects("Vida3"));
{for(var i = 0, len = gdjs.ReporteNivel5Code.GDVida3Objects1.length ;i < len;++i) {
    gdjs.ReporteNivel5Code.GDVida3Objects1[i].hide();
}
}}

}


}; //End of gdjs.ReporteNivel5Code.eventsList0x5b7338


gdjs.ReporteNivel5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ReporteNivel5Code.GDdialogObjects1.length = 0;
gdjs.ReporteNivel5Code.GDdialogObjects2.length = 0;
gdjs.ReporteNivel5Code.GDbotonreinicioObjects1.length = 0;
gdjs.ReporteNivel5Code.GDbotonreinicioObjects2.length = 0;
gdjs.ReporteNivel5Code.GDcaja7Objects1.length = 0;
gdjs.ReporteNivel5Code.GDcaja7Objects2.length = 0;
gdjs.ReporteNivel5Code.GDGameOverObjects1.length = 0;
gdjs.ReporteNivel5Code.GDGameOverObjects2.length = 0;
gdjs.ReporteNivel5Code.GDtxtGanoObjects1.length = 0;
gdjs.ReporteNivel5Code.GDtxtGanoObjects2.length = 0;
gdjs.ReporteNivel5Code.GDcaja3Objects1.length = 0;
gdjs.ReporteNivel5Code.GDcaja3Objects2.length = 0;
gdjs.ReporteNivel5Code.GDcaja5Objects1.length = 0;
gdjs.ReporteNivel5Code.GDcaja5Objects2.length = 0;
gdjs.ReporteNivel5Code.GDCaja2Objects1.length = 0;
gdjs.ReporteNivel5Code.GDCaja2Objects2.length = 0;
gdjs.ReporteNivel5Code.GDbannerObjects1.length = 0;
gdjs.ReporteNivel5Code.GDbannerObjects2.length = 0;
gdjs.ReporteNivel5Code.GDbanner2Objects1.length = 0;
gdjs.ReporteNivel5Code.GDbanner2Objects2.length = 0;
gdjs.ReporteNivel5Code.GDbtnCloseObjects1.length = 0;
gdjs.ReporteNivel5Code.GDbtnCloseObjects2.length = 0;
gdjs.ReporteNivel5Code.GDbtnContinuarObjects1.length = 0;
gdjs.ReporteNivel5Code.GDbtnContinuarObjects2.length = 0;
gdjs.ReporteNivel5Code.GDbtnAdelanteObjects1.length = 0;
gdjs.ReporteNivel5Code.GDbtnAdelanteObjects2.length = 0;
gdjs.ReporteNivel5Code.GDbtnRepeatObjects1.length = 0;
gdjs.ReporteNivel5Code.GDbtnRepeatObjects2.length = 0;
gdjs.ReporteNivel5Code.GDtxtMalObjects1.length = 0;
gdjs.ReporteNivel5Code.GDtxtMalObjects2.length = 0;
gdjs.ReporteNivel5Code.GDtxtCorrectoObjects1.length = 0;
gdjs.ReporteNivel5Code.GDtxtCorrectoObjects2.length = 0;
gdjs.ReporteNivel5Code.GDNewObject4Objects1.length = 0;
gdjs.ReporteNivel5Code.GDNewObject4Objects2.length = 0;
gdjs.ReporteNivel5Code.GDsiguienteObjects1.length = 0;
gdjs.ReporteNivel5Code.GDsiguienteObjects2.length = 0;
gdjs.ReporteNivel5Code.GDVida1Objects1.length = 0;
gdjs.ReporteNivel5Code.GDVida1Objects2.length = 0;
gdjs.ReporteNivel5Code.GDVida2Objects1.length = 0;
gdjs.ReporteNivel5Code.GDVida2Objects2.length = 0;
gdjs.ReporteNivel5Code.GDVida3Objects1.length = 0;
gdjs.ReporteNivel5Code.GDVida3Objects2.length = 0;
gdjs.ReporteNivel5Code.GDPuntajeFinalObjects1.length = 0;
gdjs.ReporteNivel5Code.GDPuntajeFinalObjects2.length = 0;
gdjs.ReporteNivel5Code.GDTiempoFinalObjects1.length = 0;
gdjs.ReporteNivel5Code.GDTiempoFinalObjects2.length = 0;
gdjs.ReporteNivel5Code.GDVidaFinalObjects1.length = 0;
gdjs.ReporteNivel5Code.GDVidaFinalObjects2.length = 0;
gdjs.ReporteNivel5Code.GDtxtScoreObjects1.length = 0;
gdjs.ReporteNivel5Code.GDtxtScoreObjects2.length = 0;
gdjs.ReporteNivel5Code.GDtxtTiempoObjects1.length = 0;
gdjs.ReporteNivel5Code.GDtxtTiempoObjects2.length = 0;
gdjs.ReporteNivel5Code.GDFondoObjects1.length = 0;
gdjs.ReporteNivel5Code.GDFondoObjects2.length = 0;

gdjs.ReporteNivel5Code.eventsList0x5b7338(runtimeScene);
return;

}

gdjs['ReporteNivel5Code'] = gdjs.ReporteNivel5Code;
