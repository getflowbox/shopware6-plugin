const PluginManager = window.PluginManager;

/*
import plugins
 */
import FlowboxTabMenuTagsPlugin from './plugin/flowbox-tabmenu-tags/flowbox-tabmenu-tags.plugin';

/*
register plugins
*/
PluginManager.register('FlowboxTabMenuTags', FlowboxTabMenuTagsPlugin, '[data-flowbox-tabmenu-tags]');

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}
