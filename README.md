# gladys-colissimo

Ce module contrôle l'évolution de vos colissimo, et vous alerte de tout changement via une notification.

## Pré-requis

Nécessite Gladys >= 3.0.0.

## Installation

* Installer le module dans le store sur Gladys.
* Rebooter Gladys.
* Cliquer sur l'onglet scripts.
* Choisir le script 'Colissimo'.
* Modifier les numéros de vos colissimo dans ce script : `var numeros = ['8n04446021774', '8n04446021775'];`.
* Chaque heure (à 00 minute), Gladys contrôle le statut de chaque colissimo, et envoie une notification si le statut a changé.
