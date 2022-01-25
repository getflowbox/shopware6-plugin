<?php
declare(strict_types=1);

namespace DutchdropsFlowbox6\Framework\Cookie;

use Shopware\Storefront\Framework\Cookie\CookieProviderInterface;

class CustomCookieProvider implements CookieProviderInterface
{
    private $originalService;

    function __construct(CookieProviderInterface $service)
    {
        $this->originalService = $service;
    }

    private const cookieGroup = [
        'snippet_name' => 'flowbox.cookieConsent.name',
        'snippet_description' => 'flowbox.cookieConsent.description',
        'entries' => [
            [
                'snippet_name' => 'flowbox.cookieConsent.nonSecure',
                'cookie' => '_flbx'
            ],
            [
                'snippet_name' => 'flowbox.cookieConsent.secure ',
                'cookie' => '_flowbox'
            ]
        ]
    ];

    public function getCookieGroups(): array
    {
        return array_merge(
            $this->originalService->getCookieGroups(),
            [
                self::cookieGroup
            ]
        );
    }
}
