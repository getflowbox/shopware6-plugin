<?php declare(strict_types=1);

namespace DutchdropsFlowbox6;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Uuid\Uuid;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class DutchdropsFlowbox6 extends Plugin
{
    public function install(InstallContext $context): void
    {
        $this->addCustomField($context->getContext());
    }

    public function uninstall(UninstallContext $context): void
    {
        // TODO keep user data?

       $this->removeCustomField($context->getContext());
    }

    private function addCustomField(Context $context) {

        /** @var EntityRepositoryInterface $customFieldSetRepository */
        $customFieldSetRepository = $this->container->get('custom_field_set.repository');

        $customFieldSetRepository->upsert([
            [
                "name" => "custom_flowbox",
                "config" => [
                    "label" => [
                        "en-GB" => "Hide Flowbox Flow for this product",
                        "de-DE" => "Flowbox Flow für dieses Produkt ausblenden"
                    ],
                    "translated" => true
                ],
                "relations" => [
                    [
                        "id" => Uuid::randomHex(),
                        "entityName" => "product"
                    ]
                ],
                "customFields" => [
                    [
                        "name" => "custom_flowbox_flow_hide",
                        "type" => "bool",
                        "config" => [
                            "type" => "checkbox",
                            "label" => [
                                "en-GB" => "Yes",
                                "de-DE" => "Ja"
                            ],
                            "translated" => true,
                            "componentName" => "sw-field",
                            "customFieldType" => "checkbox",
                            "customFieldPosition" => 1
                        ]
                    ]
                ]
            ]
        ], $context);
    }

    private function removeCustomField(Context $context) {

        /** @var EntityRepositoryInterface $customFieldSetRepository */
        $customFieldSetRepository = $this->container->get('custom_field_set.repository');

        $entityIds = $customFieldSetRepository->searchIds(
            (new Criteria())->addFilter(new EqualsFilter('name', 'custom_flowbox')),
            $context
        );

        $customFieldSetRepository->delete(
            [
                ['id' => $entityIds->firstId()]
            ],
            $context
        );
    }
}
