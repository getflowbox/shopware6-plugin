import Plugin from 'src/plugin-system/plugin.class';
import DeviceDetection from 'src/helper/device-detection.helper';
import Iterator from 'src/helper/iterator.helper';

export default class FlowboxTabMenuTags extends Plugin {

    /**
     * default options
     *
     * @type {*}
     */
    static options = {
        'flowboxKey': '',
        'tabSelector': '.flowbox-tag',
        'activeTabClass': 'is--active',
        'startIndex': -1,
        submitEvent: (DeviceDetection.isTouchDevice()) ? 'touchstart' : 'click'
    }

    init() {
        this._index = null;
        this._initTabs();
    }

    /**
     * initializes the tab navigation for the flowbox element
     *
     * @private
     */
    _initTabs() {
        const {submitEvent, tabSelector} = this.options;

        this._tabs = this.el.querySelectorAll(tabSelector);

        if (!this._tabs) return;

        Iterator.iterate(this._tabs, (tab, i) => {
            tab.addEventListener(submitEvent, this._onTabClick.bind(this, i));
        });
    }

    /**
     * fill the flowbox element with data based on the tag
     *
     * @private
    */
    _onTabClick(index, event) {
        if (event) {
            event.preventDefault();
        }

        if (index === this._index) {
            return;
        }

        this._index = index;

        Iterator.iterate(this._tabs, tab => tab.classList.remove(this.options.activeTabClass));

        const currentTab = this._tabs[index];

        if (!currentTab) return;

        window.flowbox('update', {
            key: this.options.flowboxKey,
            tags: [currentTab.getAttribute('data-tag')]
        });

        currentTab.classList.add(this.options.activeTabClass);
    }
}
