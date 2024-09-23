// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    event.remove({ output: 'echochest:echo_chest' });
    // event.remove({ output: 'better_campfires:campfire_stick' });
    // event.remove({ output: 'minecraft:campfire' });
    // event.remove({ output: 'minecraft:soul_campfire' });
    // event.shapeless(
    //     Item.of('better_campfires:campfire_stick', 4),
    //     [
    //       '#minecraft:logs_that_burn',
    //       "#minecraft:axes"
    //     ]
    // ).damageIngredient('#minecraft:axes');
    // event.shaped(
    //     Item.of('minecraft:campfire'),
    //     [
    //       ' S ',
    //       'SCS',
    //       'LSL'
    //     ],
    //     {
    //       S: 'better_campfires:campfire_stick',
    //       C: '#minecraft:coals',
    //       L: '#minecraft:logs_that_burn'
    //     }
    // );
    // event.shaped(
    //     Item.of('minecraft:soul_campfire'),
    //     [
    //       ' S ',
    //       'SCS',
    //       'LSL'
    //     ],
    //     {
    //       S: 'better_campfires:campfire_stick',
    //       C: '#minecraft:soul_fire_base_blocks',
    //       L: '#minecraft:logs_that_burn'
    //     }
    // );
    event.remove({ output: 'balancedflight:ascended_flight_ring' });

    event.remove({ id: 'realistictorches:matchbox' });
    event.shaped(
        Item.of('realistictorches:matchbox'),
        [
          'SS',
          'WW'
        ],
        {
          S: 'create:red_sand_paper',
          W: '#minecraft:wooden_slabs'
        }
    );

    event.replaceInput(
      { input: 'farmersdelight:tree_bark' },
      'farmersdelight:tree_bark',
      '#immersive_weathering:bark'
    );

    {
      const woodVariants = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry'];
      const woodTypes = ['log', 'wood'];
      for (let eachVariant in woodVariants) {
        for (let eachType in woodTypes) {
          event.remove(
            { id: `farmersdelight:cutting/${eachVariant}_${eachType}` }
          );
          event.remove(
            { id: `farmersdelight:cutting/${eachVariant}_${eachType}_using_deployer` }
          );
        }
      }
    }
    {
      const woodVariants = ['crimson', 'warped'];
      const woodTypes = ['stem', 'hyphae'];
      for (let eachVariant in woodVariants) {
        for (let eachType in woodTypes) {
          event.remove(
            { id: `farmersdelight:cutting/${eachVariant}_${eachType}` }
          );
          event.remove(
            { id: `farmersdelight:cutting/${eachVariant}_${eachType}_using_deployer` }
          );
        }
      }
    }
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
    event.add('curios:belt', 'storagedrawers:shroud_key');
    event.add('curios:belt', 'storagedrawers:quantify_key');
    event.add('curios:belt', 'storagedrawers:drawer_key');
    event.add('curios:belt', 'mcwwindows:key');
    event.add('curios:body', 'supplementaries:quiver');
    event.add('curios:belt', 'cold_sweat:waterskin');
    event.add('curios:body', 'cold_sweat:waterskin');
    event.add('curios:belt', 'cold_sweat:filled_waterskin');
    event.add('curios:body', 'cold_sweat:filled_waterskin');
    event.add('curios:hands', 'ftbquests:book');
    event.add('curios:hands', 'minecraft:writable_book');
    event.add('curios:hands', 'minecraft:written_book');
    event.add('curios:hands', 'create:clipboard');
    event.add('curios:hands', 'iammusicplayer:manual');
    event.add('curios:hands', 'solapplepie:food_book');
    event.add('curios:hands', 'minecraft:clock');
    event.add('curios:hands', 'minecraft:compass');
    event.add('curios:hands', 'minecraft:recovery_compass');
    event.add('curios:hands', 'minecraft:spyglass');
    event.add('curios:hands', 'explorerscompass:explorerscompass');
    event.add('curios:hands', 'naturescompass:naturescompass');
    event.add('curios:charm', 'minecraft:clock');
    event.add('curios:charm', 'minecraft:compass');
    event.add('curios:charm', 'minecraft:recovery_compass');
    event.add('curios:charm', 'explorerscompass:explorerscompass');
    event.add('curios:charm', 'naturescompass:naturescompass');
    event.add('curios:hands', 'supplementaries:altimeter');
    event.add('curios:charm', 'supplementaries:altimeter');
    event.add('curios:hands', 'cold_sweat:thermometer');
});