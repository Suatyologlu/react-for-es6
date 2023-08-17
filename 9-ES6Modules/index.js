//ESModules (ES Modulleri)
//Named Exports & Imports (isimli dışa/içe aktarmalar)

import {isim as name, kullanici as user, merhaba as hello} from './source';

// Default Exports & Imports (varsayılan içe/dışa aktarmalar)

import merhaba  from './source';
import { default as merhaba, isim, kullanici } from "./source"; // merhaba varsayılan, diğerleri isimli içe aktarma
