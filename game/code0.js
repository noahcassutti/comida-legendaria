gdjs.Escena_32sin_32t_237tuloCode = {};
gdjs.Escena_32sin_32t_237tuloCode.localVariables = [];
gdjs.Escena_32sin_32t_237tuloCode.idToCallbackMap = new Map();
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDtilesetObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDtilesetObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite2Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite2Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite3Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite3Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite4Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite4Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite5Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite5Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite6Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite6Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite7Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite7Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite8Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite8Objects2= [];


gdjs.Escena_32sin_32t_237tuloCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1 */
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("Animation").setAnimationName("JUMP");
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1 */
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("Animation").setAnimationName("WALK1");
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getBehavior("Animation").setAnimationName("IDLE");
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dylan"), gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length;i<l;++i) {
    if ( gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].getY() > 520 ) {
        isConditionTrue_0 = true;
        gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[k] = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i];
        ++k;
    }
}
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1 */
{for(var i = 0, len = gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length ;i < len;++i) {
    gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1[i].setPosition(1,410);
}
}
}

}

}

};

gdjs.Escena_32sin_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtilesetObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtilesetObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite3Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite3Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite4Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite4Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite5Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite5Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite6Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite6Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite7Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite7Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite8Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite8Objects2.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.eventsList0(runtimeScene);
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDDylanObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtilesetObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtilesetObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite2Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite2Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite3Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite3Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite4Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite4Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite5Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite5Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite6Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite6Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite7Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite7Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite8Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewSprite8Objects2.length = 0;


return;

}

gdjs['Escena_32sin_32t_237tuloCode'] = gdjs.Escena_32sin_32t_237tuloCode;
