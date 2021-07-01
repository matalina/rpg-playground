import k from './kaboom';
import Main from './scene/Main';
import NewBaseSence from './scene/NewBaseSence';

k.scene("main", Main);
k.scene("next", NewBaseSence);

k.start("main");
