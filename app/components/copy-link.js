import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CopyLinkTooltipComponent extends Component {
    @tracked isCopied = false;
    timeoutId = null;

    @action
    async copyLink() {
        try {
            const linkToCopy = this.args.value || window.location.href;
            await navigator.clipboard.writeText(linkToCopy);
            this.isCopied = true;
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.isCopied = false;
                this.timeoutId = null;
            }, 700);
        } catch (error) {
            console.error('Error copy text:', error);
        }
    }

    @action
    showTooltip() {
        this.isCopied = false;
    }

    @action
    hideTooltip() {
        if (!this.isCopied) {
            this.isCopied = false;
        }
    }
}
