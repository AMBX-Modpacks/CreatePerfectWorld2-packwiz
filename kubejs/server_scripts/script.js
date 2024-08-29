// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    event.remove({ output: 'echochest:echo_chest' });
    event.remove({ output: 'better_campfires:campfire_stick' });
    event.remove({ output: 'minecraft:campfire' });
    event.remove({ output: 'minecraft:soul_campfire' });
    event.shapeless(
        Item.of('better_campfires:campfire_stick', 4),
        [
          '#minecraft:logs_that_burn',
          "#minecraft:axes"
        ]
    ).damageIngredient('#minecraft:axes');
    event.shaped(
        Item.of('minecraft:campfire'),
        [
          ' S ',
          'SCS',
          'LSL'
        ],
        {
          S: 'better_campfires:campfire_stick',
          C: '#minecraft:coals',
          L: '#minecraft:logs_that_burn'
        }
    );
    event.shaped(
        Item.of('minecraft:soul_campfire'),
        [
          ' S ',
          'SCS',
          'LSL'
        ],
        {
          S: 'better_campfires:campfire_stick',
          C: '#minecraft:soul_fire_base_blocks',
          L: '#minecraft:logs_that_burn'
        }
    );
    event.remove({ output: 'balancedflight:ascended_flight_ring' });
});

ServerEvents.tags('item', event => {
    event.removeAll('curios:flight_ring');
    
    const universal_curio = event.get('curios:curio').getObjectIds();
    const blacklist = Ingredient.of(/.*refinedstorage.*/);
    universal_curio.forEach(item => {
        if (blacklist.test(item))
        {
            event.remove('curios:curio', item);
            event.add('curios:back', item);
            event.add('curios:belt', item);
            event.add('curios:charm', item);
        }
    });
    event.add('curios:body', 'minecraft:elytra');
});