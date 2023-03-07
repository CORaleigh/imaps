import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

export const addShortcuts = (mapView: __esri.MapView, setGeometry: Function) => {
    if (!window.matchMedia("(pointer:coarse)").matches) {
        let keys: string[] = [];
        let active: boolean = false;
        let vm: SketchViewModel | undefined = undefined;
        window.addEventListener('keydown', (ev: KeyboardEvent) => {
            console.log('keydown', ev.key);
            let shape: "point" | "multipoint" | "polyline" | "polygon" | "rectangle" | "circle" | undefined;
            if (ev.key === '‰' || ev.key === 'Ç' || ev.key === 'Å' || ev.key === 'Ò') {
                ev.preventDefault();
                if (!active) {
                    if (ev.key === '‰') {
                        shape = 'rectangle';
                    }
                    if (ev.key === 'Ç') {
                        shape = 'circle';
                    }
                    if (ev.key === 'Å') {
                        shape = 'polygon';
                    }
                    if (ev.key === 'Ò') {
                        shape = 'polyline';
                    }                                    
                    active = true;
                    vm = new SketchViewModel({
                        view: mapView,
                        layer: new GraphicsLayer(),
                        defaultCreateOptions: {
                            mode: "hybrid"
                        }
                    });
                    if (shape) {
                        vm?.create(shape);
                    }
                    vm.on('create', e => {
                        if (e.state === 'complete') {
                            setGeometry(e.graphic.geometry);
                            if (shape) {
                                vm?.create(shape);
                            }
                        }
                    });
                }
               
    
            }
            if (ev.key === 'π') {
                document.getElementById('propertySearch')?.click();
            }        
            if (ev.key === 'Â') {
                document.getElementById('measure')?.click();
            }
            if (ev.key === '¬') {
                document.getElementById('layerList')?.click();
            }
            if (ev.key === '∏') {
                document.getElementById('print')?.click();
            }       
            if (ev.key === '∫') {
                document.getElementById('basemaps')?.click();
            }        
            if (ev.key === '©') {
                document.getElementById('legend')?.click();
            }        
            if (ev.key === '') {
                document.getElementById('sketch')?.click();
            }         
            if (ev.key === 'Í') {
                document.getElementById('propertySelect')?.click();
            }   
            if (ev.key === 'ø') {
                document.getElementById('locationSearch')?.click();
            }        
            if (ev.key === 'ı') {
                document.getElementById('bookmarks')?.click();
            }                                          
            window.addEventListener('keyup', (ev: KeyboardEvent) => {
                if (ev.key === '‰' || ev.key === 'Ç' || ev.key === 'Å' || ev.key === 'Ò' ) {
                    console.log('keyup', keys)
                    vm?.cancel();
                    active = false;
                    vm?.destroy();
                }
    
            });
            
        });
    }
}