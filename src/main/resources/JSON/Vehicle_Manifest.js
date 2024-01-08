export let Vehicle_Manifest = {
	vehicle_range: [
		{
			brand_information: {
				tm: {
					id: "@J_I_LANDROVER",
				},
				logo: "landrover.gif",
			},
			vehicle: [
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L319",
							},
						},
						images: {
							selector: "L319_rotate.gif",
							view: [
								{
									view_num: "01",
									text: "L319_01.gif",
								},
								{
									view_num: "02",
									text: "L319_02.gif",
								},
								{
									view_num: "03",
									text: "L319_03.gif",
								},
								{
									view_num: "04",
									text: "L319_04.gif",
								},
								{
									view_num: "05",
									text: "L319_05.gif",
								},
								{
									view_num: "06",
									text: "L319_06.gif",
								},
								{
									view_num: "07",
									text: "L319_07.gif",
								},
								{
									view_num: "08",
									text: "L319_08.gif",
								},
							],
						},
						id: "L319",
					},
					as_built: "AS_BUILT_L319",
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "L319",
								year: "MY05",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY05",
								my_int: "200500",
								my_gui: "2005 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO319",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2005",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "406PN - V6 4.0 Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_200500",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY05_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "L319",
								year: "MY05",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY05",
								my_int: "200500",
								my_gui: "2005 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO319",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2005",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "448PN - AJ V8 4.4 Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_200500",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY05_V8NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "L319",
								year: "MY05",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY05",
								my_int: "200500",
								my_gui: "2005 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO319",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2005",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "276DT - V6 2.7 Diesel;276DT - V6 2.7 Diesel with cDPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_200500",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY05_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6NA",
									},
									{
										type: "SubType",
										value: "4L",
									},
								],
								model: "L319",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31910",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "406PN - V6 4.0 Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY10_V6NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L319",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31910",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PN - V8 5.0 NA Petrol;508PN - V8 5.0 Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY10_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "2.7L",
									},
								],
								model: "L319",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31910",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "276DT - V6 2.7 Diesel;276DT - V6 2.7 Diesel with cDPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY10_V6DIESEL_2_7L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L319",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: ["L31910", "VP0055"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY10_V6DIESEL_3_0L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L319",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31912",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PN - V8 5.0 NA Petrol;508PN - V8 5.0 Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201200",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY12_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "2.7L",
									},
								],
								model: "L319",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31912",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "276DT - V6 2.7 Diesel;276DT - V6 2.7 Diesel with cDPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201200",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY12_V6DIESEL_2_7L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L319",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31912",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201200",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY12_V6DIESEL_3_0L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L319",
								year: "MY14",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31914",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY14_V6DIESEL_3_0L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L319",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31914",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L319",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "L319_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L319_MY14_V6SC",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L320_SPORT",
							},
						},
						images: {
							selector: "L320_rotate.gif",
							view: [
								{
									view_num: "01",
									text: "L320_01.gif",
								},
								{
									view_num: "02",
									text: "L320_02.gif",
								},
								{
									view_num: "03",
									text: "L320_03.gif",
								},
								{
									view_num: "04",
									text: "L320_04.gif",
								},
								{
									view_num: "05",
									text: "L320_05.gif",
								},
								{
									view_num: "06",
									text: "L320_06.gif",
								},
								{
									view_num: "07",
									text: "L320_07.gif",
								},
								{
									view_num: "08",
									text: "L320_08.gif",
								},
							],
						},
						id: "L320",
					},
					as_built: "AS_BUILT_L320",
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "L320",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2005(2006 US) - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO320",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "448PN - AJ V8 4.4 Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY06_V8NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "L320",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2005(2006 US) - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO320",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "428PS - AJ V8 4.2 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY06_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "L320",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2005(2006 US) - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO320",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "276DT - V6 2.7 Diesel;276DT - V6 2.7 Diesel with cDPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY06_V6DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8DIESEL",
								},
								model: "L320",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2007 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "LRO320",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "368DT - V8 3.6 Diesel;368DT - V8 3.6 Diesel with cDPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY06_V8DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L320",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: ["L32010", "VP0011"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY10_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L320",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: ["L32010", "VP0057"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY10_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L320",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: ["L32010", "VP0013"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY10_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "3.6L",
									},
								],
								model: "L320",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: ["L32010", "VP0013"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"368DT - V8 3.6 Diesel;368DT - V8 3.6 Diesel with cDPF;368DT - V8 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY10_V8DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L320",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201200",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY12_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L320",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201200",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY12_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L320",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L320",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L320_201200",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L320_MY12_V6DIESEL",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L322",
							},
						},
						images: {
							selector: "L322_rotate.gif",
							view: [
								{
									view_num: "01",
									text: "L322_01.gif",
								},
								{
									view_num: "02",
									text: "L322_02.gif",
								},
								{
									view_num: "03",
									text: "L322_03.gif",
								},
								{
									view_num: "04",
									text: "L322_04.gif",
								},
								{
									view_num: "05",
									text: "L322_05.gif",
								},
								{
									view_num: "06",
									text: "L322_06.gif",
								},
								{
									view_num: "07",
									text: "L322_07.gif",
								},
								{
									view_num: "08",
									text: "L322_08.gif",
								},
							],
						},
						id: "L322",
					},
					as_built: "AS_BUILT_L322",
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "BASE",
								},
								model: "L322",
								year: "MY04_5",
							},
							model_year: {
								my_rds: "MY04_5",
								my_int: "200450",
								my_gui: "2005",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32205",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "3",
											value: "2005",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "BASE",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200450",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY05_BASE",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "L322",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32206",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "3",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"448PN - AJ V8 4.4 Petrol;448S2 - 4.4 V8 Catalyst;448S2 - 4.4 V8 Washcoat Catalyst;448S2 - 4.4 V8",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY06_V8NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "L322",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32206",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "3",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "428PS - AJ V8 4.2 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY06_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "STR6DIESEL",
								},
								model: "L322",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32206",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "3",
											value: "2006",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "306D1 - 3.0 6 cyl Diesel",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY06_STR6DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8DIESEL",
								},
								model: "L322",
								year: "MY07",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY07",
								my_int: "200700",
								my_gui: "2007 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32206",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2007",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "368DT - V8 3.6 Diesel;368DT - V8 3.6 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200700",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY07_V8DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "L322",
								year: "MY07",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY07",
								my_int: "200700",
								my_gui: "2007 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32207",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2007",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"448PN - AJ V8 4.4 Petrol;448S2 - 4.4 V8 Catalyst;448S2 - 4.4 V8 Washcoat Catalyst;448S2 - 4.4 V8",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200700",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY07_V8NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "L322",
								year: "MY07",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY07",
								my_int: "200700",
								my_gui: "2007 - 2009",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32207",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2007",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "428PS - AJ V8 4.2 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_200700",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY07_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "3.6L",
									},
								],
								model: "L322",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32210",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "368DT - V8 3.6 Diesel;368DT - V8 3.6 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY10_V8DIESEL_3_6L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "4.4L",
									},
								],
								model: "L322",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32210",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "448DT - V8 4.4 Diesel;448DT - V8 4.4 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY10_V8DIESEL_4_4L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L322",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32210",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PN - AJ V8 5.0 NA Petrol;508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY10_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L322",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L32210",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L322",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "508PS - AJ V8 5.0 SC Petrol;508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L322_201000",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L322_MY10_V8SC",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L359_FREE_LR2",
							},
						},
						id: "L359",
					},
					as_built: "AS_BUILT_L359",
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "I4DIESEL",
								},
								model: "L359",
								year: "MY07",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_2_2_L_DIESEL_I4",
								},
							],
							model_year: {
								my_rds: "MY07",
								my_int: "200700",
								my_gui: "2007 - 2010",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000000",
								max: "999999",
								sdv: "L35907",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2007",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "DW12 - 2.2 DIESEL;DW12 - 2.2 DIESEL with cDPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_200700",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY07_I4DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "I6PETROL",
								},
								model: "L359",
								year: "MY07",
							},
							model_year: {
								my_rds: "MY07",
								my_int: "200700",
								my_gui: "2007 - 2010",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000000",
								max: "999999",
								sdv: "L35907",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2007",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "SI6 - 3.2 PETROL;SI6 - 3.2 PETROL, ULEV 2 NAS",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_200700",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY07_I6PETROL",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "I4DIESEL",
								},
								model: "L359",
								year: "MY11",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_2_2_L_DIESEL_I4",
								},
							],
							model_year: {
								my_rds: "MY11",
								my_int: "201100",
								my_gui: "2011 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L35911",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2011",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"DW12 - 2.2 DIESEL (Low power);DW12 - 2.2 DIESEL with cDPF (Low power);DW12 - 2.2 DIESEL (High power);DW12 - 2.2 DIESEL with cDPF (High power)",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_201100",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY11_I4DIESEL",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "I6PETROL",
								},
								model: "L359",
								year: "MY11",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY11",
								my_int: "201100",
								my_gui: "2011 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L35911",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2011",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "SI6 - 3.2 PETROL;SI6 - 3.2 PETROL, ULEV 2 NAS",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_201100",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY11_I6PETROL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L359",
								year: "MY11",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY11",
								my_int: "201100",
								my_gui: "2011 - 2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L35911",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_201100",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY12_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "I4DIESEL",
								},
								model: "L359",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_2_2_L_DIESEL_I4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L35913",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value:
												"DW12 - 2.2 DIESEL (Low power);DW12 - 2.2 DIESEL with cDPF (Low power);DW12 - 2.2 DIESEL (High power);DW12 - 2.2 DIESEL with cDPF (High power)",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_201300",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY13_I4DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L359",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L35913",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L359",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L359_201300",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L359_MY13_GTDI_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_I_DEFENDER",
							},
						},
						id: "L316",
					},
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.4L",
									},
								],
								model: "L316",
								year: "MY07",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY07",
								my_int: "200700",
								my_gui: "2007 - 2010",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31607",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L316",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2007",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.4L Diesel",
										},
									],
								},
							},
							file_manifest: {
								id: "L316_200700",
							},
							setup: {
								id: "LANDROVER_DEFENDER",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L316_MY07_BASE",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.4L",
									},
								],
								model: "L316",
								year: "MY11",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY11",
								my_int: "201100",
								my_gui: "2011",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31611",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L316",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2011",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.4L Diesel",
										},
									],
								},
							},
							file_manifest: {
								id: "L316_201100",
							},
							setup: {
								id: "LANDROVER_DEFENDER",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L316_MY11_BASE",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L316",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L31612",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L316",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.2L Diesel",
										},
									],
								},
							},
							file_manifest: {
								id: "L316_201200",
							},
							setup: {
								id: "LANDROVER_DEFENDER",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L316_MY12_BASE",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L538",
							},
						},
						id: "L538",
					},
					as_built: "AS_BUILT_L538",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L538",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53812",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201200",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY12_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012 - 2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53812",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201200",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY12_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L538",
								year: "MY14",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53814",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201400",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY14_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53814",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201400",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY14_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L538",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53816",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY16_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53816",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53816",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY16_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53817",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201700",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY17_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538",
								year: "MY17",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L53817",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538_201700",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538_MY17_I4DIESEL_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L538_CON",
							},
						},
						id: "L538C",
					},
					as_built: "AS_BUILT_L538",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L538C",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L538CO",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538C",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538C_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538C_MY16_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538C",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L538CO",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538C",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538C_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538C_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538C",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L538CO",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538C",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538C_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538C_MY16_I4DIESEL_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L538_JV",
							},
						},
						id: "L538JV",
					},
					as_built: "AS_BUILT_L538",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L538JV",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L538JV",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538JV",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538JV_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538JV_MY16_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538JV",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L538JV",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538JV",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538JV_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538JV_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L538JV",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L538JV",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L538JV",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L538JV_201600",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L538JV_MY16_I4DIESEL_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L405",
							},
						},
						id: "L405",
					},
					as_built: "AS_BUILT_L405",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "4.4L",
									},
								],
								model: "L405",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40513",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "448DT - V8 4.4 Diesel;448DT - V8 4.4 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201300",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY13_V8DIESEL_4_4L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40513",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201300",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L405",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40513",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PN - AJ V8 5.0 NA Petrol;508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201300",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY13_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L405",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40513",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PS - AJ V8 5.0 SC Petrol;508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201300",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY13_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "4.4L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "448DT - V8 4.4 Diesel;448DT - V8 4.4 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_V8DIESEL_4_4L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PN - AJ V8 5.0 NA Petrol;508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PS - AJ V8 5.0 SC Petrol;508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "Hybrid",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: {
								id: "CM_QUAL_POWERTRAIN_SYSTEM",
								id_value: "VAL_HYBRID_SYSTEM",
							},
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "306DT V6 3.0 Diesel Hybrid with cDPF and TSS",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_HEV",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L405",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40514",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY14_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "4.4L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "448DT - V8 4.4 Diesel;448DT - V8 4.4 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_V8DIESEL_4_4L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PN - AJ V8 5.0 NA Petrol;508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PS - AJ V8 5.0 SC Petrol;508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "Hybrid",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_POWERTRAIN_SYSTEM",
								id_value: "VAL_HYBRID_SYSTEM",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "306DT V6 3.0 Diesel Hybrid with cDPF and TSS",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_HEV",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L405",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L40516",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L405",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L405_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L405_MY16_GTDI_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L494_SPORT",
							},
						},
						id: "L494",
					},
					as_built: "AS_BUILT_L494",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "4.4L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "448DT - V8 4.4 Diesel;448DT - V8 4.4 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_V8DIESEL_4_4L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PN - AJ V8 5.0 NA Petrol;508PN - V8 5.0 NA Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PS - AJ V8 5.0 SC Petrol;508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "Hybrid",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: {
								id: "CM_QUAL_POWERTRAIN_SYSTEM",
								id_value: "VAL_HYBRID_SYSTEM",
							},
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "306DT V6 3.0 Diesel Hybrid with cDPF and TSS",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_HEV",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L494",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49414",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201400",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY14_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8DIESEL",
									},
									{
										type: "SubType",
										value: "4.4L",
									},
								],
								model: "L494",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49416",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "448DT - V8 4.4 Diesel;448DT - V8 4.4 Diesel WITH DPF",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY16_V8DIESEL_4_4L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6DIESEL",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L494",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49416",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value:
												"306DT - V6 3.0 Diesel;306DT - V6 3.0 Diesel with cDPF;306DT - V6 3.0 Diesel (China)",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "L494",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49416",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "508PS - AJ V8 5.0 SC Petrol;508PS - V8 5.0 SC Petrol",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY16_V8SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L494",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49416",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY16_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "Hybrid",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "L494",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_POWERTRAIN_SYSTEM",
								id_value: "VAL_HYBRID_SYSTEM",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49416",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "306DT V6 3.0 Diesel Hybrid with cDPF and TSS",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY16_HEV",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L494",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_POWERTRAIN_SYSTEM",
									id_value: "VAL_STAND_SYSTEM",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L49416",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L494",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L494_201600",
							},
							setup: {
								id: "LANDROVER_T5",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L494_MY16_GTDI_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_L550",
							},
						},
						id: "L550",
					},
					as_built: "AS_BUILT_L550",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "L550",
								year: "MY15",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY15",
								my_int: "201500",
								my_gui: "2015 - 2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L55015",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L550",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2015",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L550_201500",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L550_MY15_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L550",
								year: "MY15",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY15",
								my_int: "201500",
								my_gui: "2015 - 2016",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "L55015",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L550",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2015",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L550_201500",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L550_MY15_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L550",
								year: "MY15",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY15",
								my_int: "201500",
								my_gui: "2015 - 2016",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L55015",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L550",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2015",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L550_201500",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L550_MY15_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L550",
								year: "MY17",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "L55017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L550",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L550_201700",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L550_MY17_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "L550",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "T",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "000001",
								max: "999999",
								sdv: "L55017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "L550",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "L550_201700",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_LANDROVER",
							id: "L550_MY17_GTDI_2L",
						},
					],
				},
			],
			brand: "landrover",
			config_model: "CONFIG_MODEL_JLR.xml",
		},
		{
			brand_information: {
				tm: {
					id: "@J_I_JAGUAR",
				},
				logo: "jaguar.gif",
			},
			vehicle: [
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X250",
							},
						},
						id: "X250",
					},
					as_built: "AS_BUILT_X250",
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "X250",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ADAMP",
									id_value: "VAL_N_ADAMP",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: ["X25800", "X01948"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L AJ36;5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_200800",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2008",
							id: "R_X250_MY08_V8NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X250",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ADAMP",
									id_value: "VAL_ADAMP",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: ["X25800", "X01949"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ36;5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_200800",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2008",
							id: "R_X250_MY08_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X250",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ADAMP",
									id_value: "VAL_N_ADAMP",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: ["X25800", "X01951"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_200800",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2008",
							id: "R_X250_MY08_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_ADAMP",
									id_value: "VAL_N_ADAMP",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: ["X25800", "X01950"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_200800",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2008",
							id: "R_X250_MY08_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L AJ36",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "R_X250_MY10_V8NA_4_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "R_X250_MY10_V8NA_5_0L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "R_X250_MY10_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "R_X250_MY10_V6NA",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "R00001",
								max: "R99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "R_X250_MY10_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L AJ36",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "S_X250_MY10_V8NA_4_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "S_X250_MY10_V8NA_5_0L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "S_X250_MY10_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "S_X250_MY10_V6NA",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "S_X250_MY10_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L AJ36",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "T_X250_MY10_V8NA_4_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "T_X250_MY10_V8NA_5_0L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "T_X250_MY10_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X250",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "T_X250_MY10_V6NA",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2011",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2010",
							id: "T_X250_MY10_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY12_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY12_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X250",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY12_V6NA",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY12_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X250",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "S_X250_MY12_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY12_V8NA",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY12_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X250",
								year: "MY12",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY12_V6NA",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY12_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X250",
								year: "MY12",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY12",
								my_int: "201200",
								my_gui: "2012",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25012",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2012",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201200",
							},
							setup: {
								id: "LANDROVER_EUCD",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "T_X250_MY12_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY13_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY13_V6SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "S_X250_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "S_X250_MY13_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "S00001",
								max: "S99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "S_X250_MY13_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY13_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY13_V6SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "T_X250_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "T_X250_MY13_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "T00001",
								max: "T05000",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "T_X250_MY13_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "U00001",
								max: "U99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "U_X250_MY13_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "U00001",
								max: "U99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "U_X250_MY13_V6SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X250",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "U00001",
								max: "U99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power;2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_2012",
							id: "U_X250_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "U00001",
								max: "U99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "U_X250_MY13_I4DIESEL_2_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X250",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "U00001",
								max: "U99999",
								sdv: "X25013",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X250",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X250_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X250_201200",
							id: "U_X250_MY13_GTDI_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X150",
							},
						},
						id: "X150",
					},
					as_built: "AS_BUILT_X150",
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X150",
								year: "MY06_5",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_5_L",
								},
							],
							model_year: {
								my_rds: "MY06_5",
								my_int: "200650",
								my_gui: "2006.5 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "B00001",
								max: "B99999",
								sdv: "X15065",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X150",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2006;2007;2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.5L AJ40",
										},
									],
								},
							},
							file_manifest: {
								id: "X150_200650",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X150_200650",
							id: "X150_MY06.5_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X150",
								year: "MY06_5",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L",
								},
							],
							model_year: {
								my_rds: "MY06_5",
								my_int: "200650",
								my_gui: "2006.5 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "B00001",
								max: "B99999",
								sdv: "X15065",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X150",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2006;2007;2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L AJ40",
										},
									],
								},
							},
							file_manifest: {
								id: "X150_200650",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X150_200650",
							id: "X150_MY06.5_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X150",
								year: "MY06_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY06_5",
								my_int: "200650",
								my_gui: "2006.5 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "B00001",
								max: "B99999",
								sdv: "X15065",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X150",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2006;2007;2008;2009",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ40;X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X150_200650",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X150_200650",
							id: "X150_MY06.5_V8SC",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "X150",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "B00001",
								max: "B99999",
								sdv: "X15010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X150",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X150_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X150_2010",
							id: "X150_MY10_V8NA_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X150",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "B00001",
								max: "B99999",
								sdv: "X15010",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X150",
										},
										{
											decode: "true",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X150_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X150_2010",
							id: "X150_MY10_V8SC_5L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X152",
							},
						},
						id: "X152",
					},
					as_built: "AS_BUILT_X152",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X152",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "K00001",
								max: "K99999",
								sdv: "X15214",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X152",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X152_201400",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X152_2014",
							id: "K_X152_MY14_V8SC_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X152",
								year: "MY14",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY14",
								my_int: "201400",
								my_gui: "2014 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "K00001",
								max: "K99999",
								sdv: "X15214",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X152",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2014",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X152_201400",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X152_2014",
							id: "K_X152_MY14_V6SC_3L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X152",
							},
						},
						id: "X152",
					},
					as_built: "AS_BUILT_X152",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X152",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "K00001",
								max: "K99999",
								sdv: "X15216",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X152",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133",
										},
									],
								},
							},
							file_manifest: {
								id: "X152_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X152_2014",
							id: "K_X152_MY16_V8SC_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X152",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "K00001",
								max: "K99999",
								sdv: "X15216",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X152",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X152_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X152_2014",
							id: "K_X152_MY16_V6SC_3L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X760",
							},
						},
						id: "X760",
					},
					as_built: "AS_BUILT_X760",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X760",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "X760_MY16_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X760",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "X760_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X760",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "X760_MY16_I4DIESEL_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X760",
							},
						},
						id: "X760",
					},
					as_built: "AS_BUILT_X760",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X760",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "X760_MY17_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X760",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "X760_MY17_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X760",
								year: "MY17",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "X760_MY17_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X760",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "P00001",
								max: "P99999",
								sdv: "X76017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "P_X760_MY17_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X760",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "P00001",
								max: "P99999",
								sdv: "X76017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "P_X760_MY17_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X760",
								year: "MY17",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "P00001",
								max: "P99999",
								sdv: "X76017",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X760",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X760_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X760_2016",
							id: "P_X760_MY17_I4DIESEL_2L",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X260",
							},
						},
						id: "X260",
					},
					as_built: "AS_BUILT_X260",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "Y00001",
								max: "Y99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "Y_X260_MY16_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "Y00001",
								max: "Y99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "Y_X260_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "Y00001",
								max: "Y99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "Y_X260_MY16_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "Y00001",
								max: "Y99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "Y_X260_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H35000",
								max: "H99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "H_X260_MY16_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H35000",
								max: "H99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "H_X260_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H35000",
								max: "H99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "H_X260_MY16_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H35000",
								max: "H99999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "H_X260_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T05001",
								max: "T15000",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "T_X260_MY16_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T05001",
								max: "T15000",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "T_X260_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T05001",
								max: "T15000",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "T_X260_MY16_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "T05001",
								max: "T15000",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "T_X260_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "JV_X260_MY16_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "JV_X260_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "JV_X260_MY16_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X260",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X26016",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X260",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X260_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X260_2016",
							id: "JV_X260_MY16_V6DIESEL",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X761",
							},
						},
						id: "X761",
					},
					as_built: "AS_BUILT_X761",
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6SC",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X761",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76117",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X761",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X761_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X761_2017",
							id: "X761_MY17_V6SC_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X761",
								year: "MY17",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76117",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X761",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X761_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X761_2017",
							id: "X761_MY17_GTDI_2L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "I4DIESEL",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X761",
								year: "MY17",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76117",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X761",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X761_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X761_2017",
							id: "X761_MY17_I4DIESEL_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X761",
								year: "MY17",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY17",
								my_int: "201700",
								my_gui: "2017",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "000001",
								max: "999999",
								sdv: "X76117",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X761",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2017",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X761_201700",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X761_2017",
							id: "X761_MY17_V6DIESEL",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_MY03",
							},
						},
						id: "X100",
					},
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "BASE",
								},
								model: "X100",
								year: "MY03",
							},
							model_year: {
								my_rds: "MY03",
								my_int: "200300",
								my_gui: "2003",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "A30645",
								max: "A99999",
								sdv: "A30045",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X100",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2003",
										},
									],
								},
							},
							file_manifest: {
								id: "X100_200300",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X100_2003",
							id: "X100_MY03_BASE",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "BASE",
								},
								model: "X100",
								year: "MY01",
							},
							model_year: {
								my_rds: "MY01",
								my_int: "200100",
								my_gui: "2001",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "A24196",
								max: "A30644",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X100",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
									],
								},
							},
							file_manifest: {
								id: "X100_200100",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X100_2001",
							id: "X100_MY01_BASE",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "BASE",
								},
								model: "X100",
								year: "MY00",
							},
							model_year: {
								my_rds: "MY00",
								my_int: "200000",
								my_gui: "2000",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "A00001",
								max: "A11050",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X100",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2000",
										},
									],
								},
							},
							file_manifest: {
								id: "X100_200000",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X100_2000",
							id: "X100_MY00_BASE",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X202",
							},
						},
						id: "X202",
					},
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "BASE",
								},
								model: "X202",
								year: "MY02_5",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5 - 2003",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "M44998",
								max: "M99999",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
									],
								},
							},
							file_manifest: {
								id: "X202_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_PRE_2004",
							id: "M_X202_MY02_5_BASE",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "BASE",
								},
								model: "X202",
								year: "MY02_5",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5 - 2003",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N00001",
								max: "N13088",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
									],
								},
							},
							file_manifest: {
								id: "X202_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_PRE_2004",
							id: "N_X202_MY02_5_BASE",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X202",
								year: "MY04",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N13089",
								max: "N52047",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X202_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2004",
							id: "X202_MY04_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X202",
								year: "MY04",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N13089",
								max: "N52047",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X202_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2004",
							id: "X202_MY04_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X202",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_ENG_TYPE",
								id_value: "VAL_ENG_4_2_L",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N13089",
								max: "N52047",
								sdv: "N06847",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ36",
										},
									],
								},
							},
							file_manifest: {
								id: "X202_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2004",
							id: "X202_MY04_AJ61_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X202",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N13089",
								max: "N52047",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
									],
								},
							},
							file_manifest: {
								id: "X202_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2004",
							id: "X202_MY04_V6DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6NA",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X202",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_0_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N52048",
								max: "N99999",
								sdv: "X20600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X206_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2006_ON",
							id: "X202_MY06_V6NA_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6NA",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X202",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_2_5_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N52048",
								max: "N99999",
								sdv: "X20600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X206_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2006_ON",
							id: "X202_MY06_V6NA_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8NA",
								},
								model: "X202",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N52048",
								max: "N99999",
								sdv: "X20600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ36",
										},
									],
								},
							},
							file_manifest: {
								id: "X206_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2006_ON",
							id: "X202_MY06_V8NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X202",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L_SC",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N52048",
								max: "N99999",
								sdv: ["X20600", "N43975"],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ36",
										},
									],
								},
							},
							file_manifest: {
								id: "X206_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2006_ON",
							id: "X202_MY06_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X202",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "N52048",
								max: "N99999",
								sdv: "X20600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X200",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X206_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X202_2006_ON",
							id: "X202_MY06_V6DIESEL",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X350",
							},
						},
						id: "X350",
					},
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G00001",
								max: "G34526",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G_X350_MY02_5_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G00001",
								max: "G34526",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.5L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G_X350_MY02_5_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G00001",
								max: "G34526",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G_X350_MY02_5_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G00001",
								max: "G34526",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G_X350_MY02_5_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "X01450",
								max: "X01453",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "X_X350_MY02_5_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "X01450",
								max: "X01453",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.5L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "X_X350_MY02_5_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "X01450",
								max: "X01453",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "X_X350_MY02_5_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2002.5",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "X01450",
								max: "X01453",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "X_X350_MY02_5_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2005",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G34527",
								max: "G49700",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G05_X350_MY02_5_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2005",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G34527",
								max: "G49700",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.5L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G05_X350_MY02_5_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2005",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G34527",
								max: "G49700",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G05_X350_MY02_5_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X350",
								year: "MY02_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY02_5",
								my_int: "200250",
								my_gui: "2005",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G34527",
								max: "G49700",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2002.5",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200250",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_PRE_2006",
							id: "G05_X350_MY02_5_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_0_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G49701",
								max: "G99999",
								sdv: [
									"X35600",
									"G44575",
									"G44793",
									"G44794",
									"G44795",
									"G44796",
									"G44797",
									"G44798",
									"G44800",
									"G44801",
									"G45259",
									"G45704",
									"G45867",
									"G45974",
									"G45978",
									"G45982",
									"G45986",
									"G45990",
									"G45994",
									"G46228",
									"G46229",
									"G46231",
									"G46232",
									"G46233",
									"G46235",
									"G46239",
									"G46242",
									"G47137",
									"G47141",
									"G47298",
									"G47302",
									"G47306",
									"G47310",
									"G47314",
									"G47318",
									"G47322",
									"G47326",
									"G47330",
									"G47334",
									"G47338",
									"G47342",
									"G47346",
									"G47350",
									"G47354",
									"G47358",
									"G47362",
									"G47366",
									"G47370",
									"G47374",
									"G47378",
									"G47382",
									"G47386",
									"G47390",
									"G47394",
									"G47398",
									"G47402",
									"G47406",
									"G47410",
									"G47414",
									"G47418",
									"G47422",
									"G47426",
									"G47430",
									"G47434",
									"G47438",
									"G47442",
									"G47446",
									"G47450",
									"G47454",
									"G47458",
									"G47462",
									"G47466",
									"G47470",
									"G47474",
									"G47478",
									"G47482",
									"G47486",
									"G47490",
									"G47494",
									"G47498",
									"G47502",
									"G47506",
									"G47510",
									"G47514",
									"G47518",
									"G47522",
									"G47526",
									"G47530",
									"G47534",
									"G47538",
									"G47542",
									"G47546",
									"G47550",
									"G47554",
									"G47558",
									"G47562",
									"G47566",
									"G47570",
									"G47574",
									"G47578",
									"G47582",
									"G47586",
									"G47590",
									"G47594",
									"G47598",
									"G47602",
									"G47606",
									"G47610",
									"G47614",
									"G47618",
									"G47622",
									"G47626",
									"G47630",
									"G47634",
									"G47638",
									"G47642",
									"G47646",
									"G47650",
									"G47654",
									"G47658",
									"G47662",
									"G47666",
									"G47670",
									"G47674",
									"G47678",
									"G47682",
									"G47686",
									"G47690",
									"G47694",
									"G47698",
									"G47702",
									"G47706",
									"G47710",
									"G47714",
									"G47718",
									"G47722",
									"G47726",
									"G47730",
									"G47734",
									"G47738",
									"G47742",
									"G47746",
									"G47750",
									"G47754",
									"G47758",
									"G48017",
									"G48258",
									"G48259",
									"G48260",
									"G48261",
									"G48540",
									"G48545",
									"G48549",
									"G48553",
									"G48557",
									"G48561",
									"G48566",
									"G48570",
									"G48574",
									"G48578",
									"G48582",
									"G48586",
									"G48590",
									"G48594",
									"G48598",
									"G48602",
									"G48606",
									"G48610",
									"G48614",
									"G48618",
									"G48622",
									"G48626",
									"G48630",
									"G48634",
									"G48638",
									"G48642",
									"G48654",
									"G48658",
									"G48662",
									"G48666",
									"G48670",
									"G48674",
									"G48678",
									"G48682",
									"G48686",
									"G48690",
									"G48694",
									"G48698",
									"G48702",
									"G48706",
									"G48710",
									"G48907",
									"G48911",
									"G48915",
									"G48919",
									"G48923",
									"G48927",
									"G48931",
									"G48935",
									"G48939",
									"G48943",
									"G48947",
									"G48951",
									"G48955",
									"G48959",
									"G48963",
									"G48967",
									"G48971",
									"G48975",
									"G48979",
									"G48983",
									"G48987",
									"G48991",
									"G48995",
									"G48999",
									"G49003",
									"G49007",
									"G49011",
									"G49015",
									"G49019",
									"G49023",
									"G49027",
									"G49031",
									"G49035",
									"G49039",
									"G49043",
									"G49047",
									"G49051",
									"G49055",
									"G49059",
									"G49063",
									"G49067",
									"G49071",
									"G49075",
									"G49079",
									"G49083",
									"G49087",
									"G49091",
									"G49095",
									"G49099",
									"G49103",
									"G49107",
									"G49111",
									"G49115",
									"G49119",
									"G49123",
									"G49127",
									"G49131",
									"G49135",
									"G49139",
									"G49143",
									"G49147",
									"G49151",
									"G49155",
									"G49159",
									"G49163",
									"G49167",
									"G49171",
									"G49175",
									"G49179",
									"G49183",
									"G49187",
									"G49191",
									"G49195",
									"G49199",
									"G49203",
									"G49207",
									"G49211",
									"G49215",
									"G49219",
									"G49223",
									"G49227",
									"G49231",
									"G49235",
									"G49239",
									"G49243",
									"X01497",
									"X01509",
									"X01529",
									"X01530",
									"X01531",
									"X01532",
									"X01588",
									"X01589",
									"X01590",
									"X01592",
									"X01596",
									"X01599",
									"X01600",
									"X01601",
									"X01607",
									"X01610",
									"X01612",
									"X01613",
									"X01614",
									"X01615",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "G_X350_MY06_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_5_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G49701",
								max: "G99999",
								sdv: [
									"X35600",
									"G44575",
									"G44793",
									"G44794",
									"G44795",
									"G44796",
									"G44797",
									"G44798",
									"G44800",
									"G44801",
									"G45259",
									"G45704",
									"G45867",
									"G45974",
									"G45978",
									"G45982",
									"G45986",
									"G45990",
									"G45994",
									"G46228",
									"G46229",
									"G46231",
									"G46232",
									"G46233",
									"G46235",
									"G46239",
									"G46242",
									"G47137",
									"G47141",
									"G47298",
									"G47302",
									"G47306",
									"G47310",
									"G47314",
									"G47318",
									"G47322",
									"G47326",
									"G47330",
									"G47334",
									"G47338",
									"G47342",
									"G47346",
									"G47350",
									"G47354",
									"G47358",
									"G47362",
									"G47366",
									"G47370",
									"G47374",
									"G47378",
									"G47382",
									"G47386",
									"G47390",
									"G47394",
									"G47398",
									"G47402",
									"G47406",
									"G47410",
									"G47414",
									"G47418",
									"G47422",
									"G47426",
									"G47430",
									"G47434",
									"G47438",
									"G47442",
									"G47446",
									"G47450",
									"G47454",
									"G47458",
									"G47462",
									"G47466",
									"G47470",
									"G47474",
									"G47478",
									"G47482",
									"G47486",
									"G47490",
									"G47494",
									"G47498",
									"G47502",
									"G47506",
									"G47510",
									"G47514",
									"G47518",
									"G47522",
									"G47526",
									"G47530",
									"G47534",
									"G47538",
									"G47542",
									"G47546",
									"G47550",
									"G47554",
									"G47558",
									"G47562",
									"G47566",
									"G47570",
									"G47574",
									"G47578",
									"G47582",
									"G47586",
									"G47590",
									"G47594",
									"G47598",
									"G47602",
									"G47606",
									"G47610",
									"G47614",
									"G47618",
									"G47622",
									"G47626",
									"G47630",
									"G47634",
									"G47638",
									"G47642",
									"G47646",
									"G47650",
									"G47654",
									"G47658",
									"G47662",
									"G47666",
									"G47670",
									"G47674",
									"G47678",
									"G47682",
									"G47686",
									"G47690",
									"G47694",
									"G47698",
									"G47702",
									"G47706",
									"G47710",
									"G47714",
									"G47718",
									"G47722",
									"G47726",
									"G47730",
									"G47734",
									"G47738",
									"G47742",
									"G47746",
									"G47750",
									"G47754",
									"G47758",
									"G48017",
									"G48258",
									"G48259",
									"G48260",
									"G48261",
									"G48540",
									"G48545",
									"G48549",
									"G48553",
									"G48557",
									"G48561",
									"G48566",
									"G48570",
									"G48574",
									"G48578",
									"G48582",
									"G48586",
									"G48590",
									"G48594",
									"G48598",
									"G48602",
									"G48606",
									"G48610",
									"G48614",
									"G48618",
									"G48622",
									"G48626",
									"G48630",
									"G48634",
									"G48638",
									"G48642",
									"G48654",
									"G48658",
									"G48662",
									"G48666",
									"G48670",
									"G48674",
									"G48678",
									"G48682",
									"G48686",
									"G48690",
									"G48694",
									"G48698",
									"G48702",
									"G48706",
									"G48710",
									"G48907",
									"G48911",
									"G48915",
									"G48919",
									"G48923",
									"G48927",
									"G48931",
									"G48935",
									"G48939",
									"G48943",
									"G48947",
									"G48951",
									"G48955",
									"G48959",
									"G48963",
									"G48967",
									"G48971",
									"G48975",
									"G48979",
									"G48983",
									"G48987",
									"G48991",
									"G48995",
									"G48999",
									"G49003",
									"G49007",
									"G49011",
									"G49015",
									"G49019",
									"G49023",
									"G49027",
									"G49031",
									"G49035",
									"G49039",
									"G49043",
									"G49047",
									"G49051",
									"G49055",
									"G49059",
									"G49063",
									"G49067",
									"G49071",
									"G49075",
									"G49079",
									"G49083",
									"G49087",
									"G49091",
									"G49095",
									"G49099",
									"G49103",
									"G49107",
									"G49111",
									"G49115",
									"G49119",
									"G49123",
									"G49127",
									"G49131",
									"G49135",
									"G49139",
									"G49143",
									"G49147",
									"G49151",
									"G49155",
									"G49159",
									"G49163",
									"G49167",
									"G49171",
									"G49175",
									"G49179",
									"G49183",
									"G49187",
									"G49191",
									"G49195",
									"G49199",
									"G49203",
									"G49207",
									"G49211",
									"G49215",
									"G49219",
									"G49223",
									"G49227",
									"G49231",
									"G49235",
									"G49239",
									"G49243",
									"X01497",
									"X01509",
									"X01529",
									"X01530",
									"X01531",
									"X01532",
									"X01588",
									"X01589",
									"X01590",
									"X01592",
									"X01596",
									"X01599",
									"X01600",
									"X01601",
									"X01607",
									"X01610",
									"X01612",
									"X01613",
									"X01614",
									"X01615",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.5L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "G_X350_MY06_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G49701",
								max: "G99999",
								sdv: [
									"X35600",
									"G44575",
									"G44793",
									"G44794",
									"G44795",
									"G44796",
									"G44797",
									"G44798",
									"G44800",
									"G44801",
									"G45259",
									"G45704",
									"G45867",
									"G45974",
									"G45978",
									"G45982",
									"G45986",
									"G45990",
									"G45994",
									"G46228",
									"G46229",
									"G46231",
									"G46232",
									"G46233",
									"G46235",
									"G46239",
									"G46242",
									"G47137",
									"G47141",
									"G47298",
									"G47302",
									"G47306",
									"G47310",
									"G47314",
									"G47318",
									"G47322",
									"G47326",
									"G47330",
									"G47334",
									"G47338",
									"G47342",
									"G47346",
									"G47350",
									"G47354",
									"G47358",
									"G47362",
									"G47366",
									"G47370",
									"G47374",
									"G47378",
									"G47382",
									"G47386",
									"G47390",
									"G47394",
									"G47398",
									"G47402",
									"G47406",
									"G47410",
									"G47414",
									"G47418",
									"G47422",
									"G47426",
									"G47430",
									"G47434",
									"G47438",
									"G47442",
									"G47446",
									"G47450",
									"G47454",
									"G47458",
									"G47462",
									"G47466",
									"G47470",
									"G47474",
									"G47478",
									"G47482",
									"G47486",
									"G47490",
									"G47494",
									"G47498",
									"G47502",
									"G47506",
									"G47510",
									"G47514",
									"G47518",
									"G47522",
									"G47526",
									"G47530",
									"G47534",
									"G47538",
									"G47542",
									"G47546",
									"G47550",
									"G47554",
									"G47558",
									"G47562",
									"G47566",
									"G47570",
									"G47574",
									"G47578",
									"G47582",
									"G47586",
									"G47590",
									"G47594",
									"G47598",
									"G47602",
									"G47606",
									"G47610",
									"G47614",
									"G47618",
									"G47622",
									"G47626",
									"G47630",
									"G47634",
									"G47638",
									"G47642",
									"G47646",
									"G47650",
									"G47654",
									"G47658",
									"G47662",
									"G47666",
									"G47670",
									"G47674",
									"G47678",
									"G47682",
									"G47686",
									"G47690",
									"G47694",
									"G47698",
									"G47702",
									"G47706",
									"G47710",
									"G47714",
									"G47718",
									"G47722",
									"G47726",
									"G47730",
									"G47734",
									"G47738",
									"G47742",
									"G47746",
									"G47750",
									"G47754",
									"G47758",
									"G48017",
									"G48258",
									"G48259",
									"G48260",
									"G48261",
									"G48540",
									"G48545",
									"G48549",
									"G48553",
									"G48557",
									"G48561",
									"G48566",
									"G48570",
									"G48574",
									"G48578",
									"G48582",
									"G48586",
									"G48590",
									"G48594",
									"G48598",
									"G48602",
									"G48606",
									"G48610",
									"G48614",
									"G48618",
									"G48622",
									"G48626",
									"G48630",
									"G48634",
									"G48638",
									"G48642",
									"G48654",
									"G48658",
									"G48662",
									"G48666",
									"G48670",
									"G48674",
									"G48678",
									"G48682",
									"G48686",
									"G48690",
									"G48694",
									"G48698",
									"G48702",
									"G48706",
									"G48710",
									"G48907",
									"G48911",
									"G48915",
									"G48919",
									"G48923",
									"G48927",
									"G48931",
									"G48935",
									"G48939",
									"G48943",
									"G48947",
									"G48951",
									"G48955",
									"G48959",
									"G48963",
									"G48967",
									"G48971",
									"G48975",
									"G48979",
									"G48983",
									"G48987",
									"G48991",
									"G48995",
									"G48999",
									"G49003",
									"G49007",
									"G49011",
									"G49015",
									"G49019",
									"G49023",
									"G49027",
									"G49031",
									"G49035",
									"G49039",
									"G49043",
									"G49047",
									"G49051",
									"G49055",
									"G49059",
									"G49063",
									"G49067",
									"G49071",
									"G49075",
									"G49079",
									"G49083",
									"G49087",
									"G49091",
									"G49095",
									"G49099",
									"G49103",
									"G49107",
									"G49111",
									"G49115",
									"G49119",
									"G49123",
									"G49127",
									"G49131",
									"G49135",
									"G49139",
									"G49143",
									"G49147",
									"G49151",
									"G49155",
									"G49159",
									"G49163",
									"G49167",
									"G49171",
									"G49175",
									"G49179",
									"G49183",
									"G49187",
									"G49191",
									"G49195",
									"G49199",
									"G49203",
									"G49207",
									"G49211",
									"G49215",
									"G49219",
									"G49223",
									"G49227",
									"G49231",
									"G49235",
									"G49239",
									"G49243",
									"X01497",
									"X01509",
									"X01529",
									"X01530",
									"X01531",
									"X01532",
									"X01588",
									"X01589",
									"X01590",
									"X01592",
									"X01596",
									"X01599",
									"X01600",
									"X01601",
									"X01607",
									"X01610",
									"X01612",
									"X01613",
									"X01614",
									"X01615",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "G_X350_MY06_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L_SC",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G49701",
								max: "G99999",
								sdv: [
									"X35600",
									"G44575",
									"G44793",
									"G44794",
									"G44795",
									"G44796",
									"G44797",
									"G44798",
									"G44800",
									"G44801",
									"G45259",
									"G45704",
									"G45867",
									"G45974",
									"G45978",
									"G45982",
									"G45986",
									"G45990",
									"G45994",
									"G46228",
									"G46229",
									"G46231",
									"G46232",
									"G46233",
									"G46235",
									"G46239",
									"G46242",
									"G47137",
									"G47141",
									"G47298",
									"G47302",
									"G47306",
									"G47310",
									"G47314",
									"G47318",
									"G47322",
									"G47326",
									"G47330",
									"G47334",
									"G47338",
									"G47342",
									"G47346",
									"G47350",
									"G47354",
									"G47358",
									"G47362",
									"G47366",
									"G47370",
									"G47374",
									"G47378",
									"G47382",
									"G47386",
									"G47390",
									"G47394",
									"G47398",
									"G47402",
									"G47406",
									"G47410",
									"G47414",
									"G47418",
									"G47422",
									"G47426",
									"G47430",
									"G47434",
									"G47438",
									"G47442",
									"G47446",
									"G47450",
									"G47454",
									"G47458",
									"G47462",
									"G47466",
									"G47470",
									"G47474",
									"G47478",
									"G47482",
									"G47486",
									"G47490",
									"G47494",
									"G47498",
									"G47502",
									"G47506",
									"G47510",
									"G47514",
									"G47518",
									"G47522",
									"G47526",
									"G47530",
									"G47534",
									"G47538",
									"G47542",
									"G47546",
									"G47550",
									"G47554",
									"G47558",
									"G47562",
									"G47566",
									"G47570",
									"G47574",
									"G47578",
									"G47582",
									"G47586",
									"G47590",
									"G47594",
									"G47598",
									"G47602",
									"G47606",
									"G47610",
									"G47614",
									"G47618",
									"G47622",
									"G47626",
									"G47630",
									"G47634",
									"G47638",
									"G47642",
									"G47646",
									"G47650",
									"G47654",
									"G47658",
									"G47662",
									"G47666",
									"G47670",
									"G47674",
									"G47678",
									"G47682",
									"G47686",
									"G47690",
									"G47694",
									"G47698",
									"G47702",
									"G47706",
									"G47710",
									"G47714",
									"G47718",
									"G47722",
									"G47726",
									"G47730",
									"G47734",
									"G47738",
									"G47742",
									"G47746",
									"G47750",
									"G47754",
									"G47758",
									"G48017",
									"G48258",
									"G48259",
									"G48260",
									"G48261",
									"G48540",
									"G48545",
									"G48549",
									"G48553",
									"G48557",
									"G48561",
									"G48566",
									"G48570",
									"G48574",
									"G48578",
									"G48582",
									"G48586",
									"G48590",
									"G48594",
									"G48598",
									"G48602",
									"G48606",
									"G48610",
									"G48614",
									"G48618",
									"G48622",
									"G48626",
									"G48630",
									"G48634",
									"G48638",
									"G48642",
									"G48654",
									"G48658",
									"G48662",
									"G48666",
									"G48670",
									"G48674",
									"G48678",
									"G48682",
									"G48686",
									"G48690",
									"G48694",
									"G48698",
									"G48702",
									"G48706",
									"G48710",
									"G48907",
									"G48911",
									"G48915",
									"G48919",
									"G48923",
									"G48927",
									"G48931",
									"G48935",
									"G48939",
									"G48943",
									"G48947",
									"G48951",
									"G48955",
									"G48959",
									"G48963",
									"G48967",
									"G48971",
									"G48975",
									"G48979",
									"G48983",
									"G48987",
									"G48991",
									"G48995",
									"G48999",
									"G49003",
									"G49007",
									"G49011",
									"G49015",
									"G49019",
									"G49023",
									"G49027",
									"G49031",
									"G49035",
									"G49039",
									"G49043",
									"G49047",
									"G49051",
									"G49055",
									"G49059",
									"G49063",
									"G49067",
									"G49071",
									"G49075",
									"G49079",
									"G49083",
									"G49087",
									"G49091",
									"G49095",
									"G49099",
									"G49103",
									"G49107",
									"G49111",
									"G49115",
									"G49119",
									"G49123",
									"G49127",
									"G49131",
									"G49135",
									"G49139",
									"G49143",
									"G49147",
									"G49151",
									"G49155",
									"G49159",
									"G49163",
									"G49167",
									"G49171",
									"G49175",
									"G49179",
									"G49183",
									"G49187",
									"G49191",
									"G49195",
									"G49199",
									"G49203",
									"G49207",
									"G49211",
									"G49215",
									"G49219",
									"G49223",
									"G49227",
									"G49231",
									"G49235",
									"G49239",
									"G49243",
									"X01497",
									"X01509",
									"X01529",
									"X01530",
									"X01531",
									"X01532",
									"X01588",
									"X01589",
									"X01590",
									"X01592",
									"X01596",
									"X01599",
									"X01600",
									"X01601",
									"X01607",
									"X01610",
									"X01612",
									"X01613",
									"X01614",
									"X01615",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "G_X350_MY06_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X350",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "G49701",
								max: "G99999",
								sdv: [
									"X35600",
									"G44575",
									"G44793",
									"G44794",
									"G44795",
									"G44796",
									"G44797",
									"G44798",
									"G44800",
									"G44801",
									"G45259",
									"G45704",
									"G45867",
									"G45974",
									"G45978",
									"G45982",
									"G45986",
									"G45990",
									"G45994",
									"G46228",
									"G46229",
									"G46231",
									"G46232",
									"G46233",
									"G46235",
									"G46239",
									"G46242",
									"G47137",
									"G47141",
									"G47298",
									"G47302",
									"G47306",
									"G47310",
									"G47314",
									"G47318",
									"G47322",
									"G47326",
									"G47330",
									"G47334",
									"G47338",
									"G47342",
									"G47346",
									"G47350",
									"G47354",
									"G47358",
									"G47362",
									"G47366",
									"G47370",
									"G47374",
									"G47378",
									"G47382",
									"G47386",
									"G47390",
									"G47394",
									"G47398",
									"G47402",
									"G47406",
									"G47410",
									"G47414",
									"G47418",
									"G47422",
									"G47426",
									"G47430",
									"G47434",
									"G47438",
									"G47442",
									"G47446",
									"G47450",
									"G47454",
									"G47458",
									"G47462",
									"G47466",
									"G47470",
									"G47474",
									"G47478",
									"G47482",
									"G47486",
									"G47490",
									"G47494",
									"G47498",
									"G47502",
									"G47506",
									"G47510",
									"G47514",
									"G47518",
									"G47522",
									"G47526",
									"G47530",
									"G47534",
									"G47538",
									"G47542",
									"G47546",
									"G47550",
									"G47554",
									"G47558",
									"G47562",
									"G47566",
									"G47570",
									"G47574",
									"G47578",
									"G47582",
									"G47586",
									"G47590",
									"G47594",
									"G47598",
									"G47602",
									"G47606",
									"G47610",
									"G47614",
									"G47618",
									"G47622",
									"G47626",
									"G47630",
									"G47634",
									"G47638",
									"G47642",
									"G47646",
									"G47650",
									"G47654",
									"G47658",
									"G47662",
									"G47666",
									"G47670",
									"G47674",
									"G47678",
									"G47682",
									"G47686",
									"G47690",
									"G47694",
									"G47698",
									"G47702",
									"G47706",
									"G47710",
									"G47714",
									"G47718",
									"G47722",
									"G47726",
									"G47730",
									"G47734",
									"G47738",
									"G47742",
									"G47746",
									"G47750",
									"G47754",
									"G47758",
									"G48017",
									"G48258",
									"G48259",
									"G48260",
									"G48261",
									"G48540",
									"G48545",
									"G48549",
									"G48553",
									"G48557",
									"G48561",
									"G48566",
									"G48570",
									"G48574",
									"G48578",
									"G48582",
									"G48586",
									"G48590",
									"G48594",
									"G48598",
									"G48602",
									"G48606",
									"G48610",
									"G48614",
									"G48618",
									"G48622",
									"G48626",
									"G48630",
									"G48634",
									"G48638",
									"G48642",
									"G48654",
									"G48658",
									"G48662",
									"G48666",
									"G48670",
									"G48674",
									"G48678",
									"G48682",
									"G48686",
									"G48690",
									"G48694",
									"G48698",
									"G48702",
									"G48706",
									"G48710",
									"G48907",
									"G48911",
									"G48915",
									"G48919",
									"G48923",
									"G48927",
									"G48931",
									"G48935",
									"G48939",
									"G48943",
									"G48947",
									"G48951",
									"G48955",
									"G48959",
									"G48963",
									"G48967",
									"G48971",
									"G48975",
									"G48979",
									"G48983",
									"G48987",
									"G48991",
									"G48995",
									"G48999",
									"G49003",
									"G49007",
									"G49011",
									"G49015",
									"G49019",
									"G49023",
									"G49027",
									"G49031",
									"G49035",
									"G49039",
									"G49043",
									"G49047",
									"G49051",
									"G49055",
									"G49059",
									"G49063",
									"G49067",
									"G49071",
									"G49075",
									"G49079",
									"G49083",
									"G49087",
									"G49091",
									"G49095",
									"G49099",
									"G49103",
									"G49107",
									"G49111",
									"G49115",
									"G49119",
									"G49123",
									"G49127",
									"G49131",
									"G49135",
									"G49139",
									"G49143",
									"G49147",
									"G49151",
									"G49155",
									"G49159",
									"G49163",
									"G49167",
									"G49171",
									"G49175",
									"G49179",
									"G49183",
									"G49187",
									"G49191",
									"G49195",
									"G49199",
									"G49203",
									"G49207",
									"G49211",
									"G49215",
									"G49219",
									"G49223",
									"G49227",
									"G49231",
									"G49235",
									"G49239",
									"G49243",
									"X01497",
									"X01509",
									"X01529",
									"X01530",
									"X01531",
									"X01532",
									"X01588",
									"X01589",
									"X01590",
									"X01592",
									"X01596",
									"X01599",
									"X01600",
									"X01601",
									"X01607",
									"X01610",
									"X01612",
									"X01613",
									"X01614",
									"X01615",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "G_X350_MY06_V6DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_0_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H00001",
								max: "H18679",
								sdv: "X35600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "H_X350_MY06_V6NA",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_5_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H00001",
								max: "H18679",
								sdv: "X35600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.5L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "H_X350_MY06_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H00001",
								max: "H18679",
								sdv: "X35600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "H_X350_MY06_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X350",
								year: "MY06",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L_SC",
								},
							],
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H00001",
								max: "H18679",
								sdv: ["G48838", "X35600"],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "H_X350_MY06_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X350",
								year: "MY06",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY06",
								my_int: "200600",
								my_gui: "2006",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H00001",
								max: "H18679",
								sdv: "X35600",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2006",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200600",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "H_X350_MY06_V6DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X350",
								year: "MY08",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H18680",
								max: "H34999",
								sdv: [
									"X35800",
									"H16799",
									"H16801",
									"H17171",
									"H17249",
									"H17252",
									"H17255",
									"H17258",
									"H17341",
									"H17344",
									"H17347",
									"H17350",
									"H17876",
									"H17877",
									"H17960",
									"H17962",
									"H17964",
									"H17966",
									"H17968",
									"H17970",
									"H17972",
									"H17974",
									"H17976",
									"H17977",
									"H17978",
									"H17979",
									"H18006",
									"H18009",
									"H18014",
									"H18016",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.7L AJd-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200800",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "X350_MY08_V6DIESEL",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V8SC",
								},
								model: "X350",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L_SC",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H18680",
								max: "H34999",
								sdv: [
									"X35800",
									"H15560",
									"H16798",
									"H16632",
									"H16802",
									"H17173",
									"H17250",
									"H17253",
									"H17256",
									"H17342",
									"H17345",
									"H17348",
									"H17875",
									"H17961",
									"H17963",
									"H17965",
									"H17967",
									"H17969",
									"H17971",
									"H17973",
									"H18005",
									"H18007",
									"H18008",
									"H18010",
									"H18011",
									"H18012",
									"H18013",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L sc AJ33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200800",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "X350_MY08_V8SC",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "3.5L",
									},
								],
								model: "X350",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_5_L",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H18680",
								max: "H34999",
								sdv: "X35800",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.5L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200800",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "X350_MY08_V8NA_3.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "4.2L",
									},
								],
								model: "X350",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_4_2_L",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H18680",
								max: "H34999",
								sdv: [
									"X35800",
									"H15132",
									"H15221",
									"H15224",
									"H15559",
									"H16633",
									"H16800",
									"H17172",
									"H17251",
									"H17254",
									"H17257",
									"H17343",
									"H17346",
									"H17349",
									"H17878",
									"H17975",
									"H18015",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "4.2L AJ-33",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200800",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "X350_MY08_V8NA_4.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: {
									type: "Type",
									value: "V6NA",
								},
								model: "X350",
								year: "MY08",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_ENG_TYPE",
									id_value: "VAL_ENG_3_0_L",
								},
							],
							model_year: {
								my_rds: "MY08",
								my_int: "200800",
								my_gui: "2008 - 2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "H18680",
								max: "H34999",
								sdv: "X35800",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X350",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X350_200800",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X350_2006_ON",
							id: "X350_MY08_V6NA",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X350",
							},
						},
						id: "X351",
					},
					variant: [
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6NA",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X351",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35110",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY10_V6NA_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: ["X35110", "X02156", "X02213"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY10_V8NA_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: ["X35110", "X02161", "X02168"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY10_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: ["X35110", "X02144"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY10_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V6NA",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X351",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: "X35110",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY10_V6NA_3L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: ["X35110", "X02156", "X02213"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY10_V8NA_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY10",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "I",
								},
							],
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: ["X35110", "X02161", "X02168"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY10_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY10",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY10",
								my_int: "201000",
								my_gui: "2010 - 2012",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: ["X35110", "X02144"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2010",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201000",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY10_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY13_V8NA_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY13_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY13_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY13_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY13_V8NA_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY13_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "W00001",
								max: "W99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY13_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY13_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8NA",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J70000",
								max: "J99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L AJ-133",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY13_V8NA_5L",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J70000",
								max: "J99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY13_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY13",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J70000",
								max: "J99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY13_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
								{
									id: "CYLINDER_TO_MONITOR_ID_MAPPING",
									id_value: "A2,A5,A3,A4",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "J70000",
								max: "J99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY13_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY13",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY13",
								my_int: "201300",
								my_gui: "2013 - 2015",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J70000",
								max: "J99999",
								sdv: "X35113",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2013",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201300",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY13_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY16_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "V00001",
								max: "V99999",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "V_X351_MY16_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W17456",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY16_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W17456",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "W00001",
								max: "W17456",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W00001",
								max: "W17456",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY16_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W17457",
								max: "W99999",
								sdv: ["X35119", "W15377", "W16116"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY19_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W17457",
								max: "W99999",
								sdv: [
									"X35119",
									"W15375",
									"W15377",
									"W15379",
									"W15652",
									"W15653",
									"W15654",
									"W15655",
									"W15656",
									"W15658",
									"W16116",
									"W16117",
								],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY19_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "W17457",
								max: "W99999",
								sdv: ["X35119", "W15377", "W16116"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY19_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "W17457",
								max: "W99999",
								sdv: ["X35119", "W15377", "W16116"],
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "W_X351_MY19_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J76000",
								max: "J76918",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY16_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J76000",
								max: "J76918",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY16_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "J76000",
								max: "J76918",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY16_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J76000",
								max: "J76918",
								sdv: "X35116",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201600",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY16_V6SC",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "V8SC",
									},
									{
										type: "SubType",
										value: "5L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "8",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J76919",
								max: "J99999",
								sdv: "X35119",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "5.0L sc AJ133;X200(2.5L AJ-V6) or X351(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY19_V8SC_5L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6DIESEL",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J76919",
								max: "J99999",
								sdv: "X35119",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351;X300 or X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "true",
											name: "Engine",
											type: "1",
											value: "3.0L V6d;3.0L V6d - low power",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY19_V6DIESEL",
						},
						{
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "GTDI",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "NUM_CYLINDERS",
									id_value: "4",
								},
								{
									id: "CYL_FORMATION",
									id_value: "I",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: ["SAL_US", "SAL_ROW"],
								},
								min: "J76919",
								max: "J99999",
								sdv: "X35119",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY19_GTDI_2L",
						},
						{
							qualifier: {
								qual: {
									type: "Type",
									value: "V6SC",
								},
								model: "X351",
								year: "MY16",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_SUPERCHARGED",
								},
								{
									id: "NUM_CYLINDERS",
									id_value: "6",
								},
								{
									id: "CYL_FORMATION",
									id_value: "V",
								},
								{
									id: "CYL_DIRECTION",
									id_value: "L",
								},
								{
									id: "CYL_NUMBERING",
									id_value: "D",
								},
							],
							model_year: {
								my_rds: "MY16",
								my_int: "201600",
								my_gui: "2016 - 2019",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J76919",
								max: "J99999",
								sdv: "X35119",
								decode: {
									attribute: [
										{
											decode: "true",
											name: "Model",
											type: "1",
											value: "X351",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2016",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L V6 SC",
										},
									],
								},
							},
							file_manifest: {
								id: "X351_201900",
							},
							setup: {
								id: "JAGUAR_CCF",
							},
							legacy_setup: "TOOL_SETUP_X351",
							id: "J_X351_MY19_V6SC",
						},
					],
				},
				{
					model: {
						model_name: {
							tm: {
								id: "@J_QV_X400",
							},
						},
						id: "X400",
					},
					variant: [
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D55322",
								max: "D99999",
								sdv: [
									"D42929",
									"D42934",
									"D42939",
									"D42944",
									"D42949",
									"D42954",
									"D42959",
									"D42964",
									"D42969",
									"D42974",
									"D42979",
									"D42984",
									"D42989",
									"D42994",
									"D42999",
									"D43004",
									"D43009",
									"D43014",
									"D43019",
									"D43024",
									"D43029",
									"D43034",
									"D43039",
									"D43044",
									"D43049",
									"D43054",
									"D43059",
									"D43064",
									"D43069",
									"D43074",
									"D43079",
									"D43084",
									"D43089",
									"D43094",
									"D43099",
									"D43104",
									"D43109",
									"D43114",
									"D43119",
									"D43124",
									"D43129",
									"D43134",
									"D43139",
									"D43193",
									"D43198",
									"D43203",
									"D43208",
									"D43213",
									"D43218",
									"D43223",
									"D43228",
									"D43237",
									"D43245",
									"D43253",
									"D43261",
									"D43269",
									"D43277",
									"D43285",
									"D43293",
									"D43301",
									"D43309",
									"D43317",
									"D43325",
									"D43333",
									"D43341",
									"D43349",
									"D43357",
									"D43365",
									"D43373",
									"D43381",
									"D43389",
									"D43397",
									"D43405",
									"D43413",
									"D43421",
									"D43429",
									"D43437",
									"D43445",
									"D43453",
									"D43461",
									"D43533",
									"D43541",
									"D43549",
									"D43557",
									"D43565",
									"D43573",
									"D43581",
									"D43589",
									"D43597",
									"D43605",
									"D43613",
									"D43621",
									"D43629",
									"D43637",
									"D43645",
									"D43653",
									"D43661",
									"D43868",
									"D43876",
									"D43884",
									"D43892",
									"D43900",
									"D43908",
									"D43916",
									"D43924",
									"D43932",
									"D43940",
									"D43948",
									"D43956",
									"D43964",
									"D43972",
									"D43980",
									"D43988",
									"D43996",
									"D44004",
									"D44012",
									"D44020",
									"D44028",
									"D44036",
									"D44044",
									"D44052",
									"D44060",
									"D44068",
									"D44076",
									"D44084",
									"D44092",
									"D44100",
									"D44108",
									"D44116",
									"D44124",
									"D44132",
									"D44140",
									"D44148",
									"D44156",
									"D44164",
									"D44172",
									"D44180",
									"D44188",
									"D44196",
									"D44204",
									"D44212",
									"D44220",
									"D44228",
									"D44236",
									"D44244",
									"D44252",
									"D44260",
									"D44268",
									"D44276",
									"D44284",
									"D44292",
									"D44300",
									"D44308",
									"D44316",
									"D44324",
									"D44332",
									"D44341",
									"D44349",
									"D44357",
									"D44365",
									"D44373",
									"D44381",
									"D44389",
									"D44397",
									"D44405",
									"D44413",
									"D44421",
									"D44429",
									"D44437",
									"D44445",
									"D44453",
									"D44461",
									"D44469",
									"D44477",
									"D44485",
									"D44493",
									"D44501",
									"D44509",
									"D44517",
									"D44525",
									"D44533",
									"D44541",
									"D44549",
									"D44557",
									"D44565",
									"D44573",
									"D44581",
									"D44694",
									"D44702",
									"D44710",
									"D44718",
									"D44726",
									"D44734",
									"D44743",
									"D44751",
									"D44759",
									"D44767",
									"D44775",
									"D44783",
									"D44791",
									"D44799",
									"D44807",
									"D44815",
									"D44823",
									"D44832",
									"D44840",
									"D44848",
									"D44856",
									"D44864",
									"D44872",
									"D44880",
									"D44888",
									"D44896",
									"D44904",
									"D44913",
									"D44921",
									"D44929",
									"D44937",
									"D44945",
									"D44953",
									"D44961",
									"D44969",
									"D44977",
									"D44985",
									"D44994",
									"D45002",
									"D45010",
									"D45018",
									"D45027",
									"D45035",
									"D45043",
									"D45051",
									"D45060",
									"D45068",
									"D45076",
									"D45084",
									"D45093",
									"D45101",
									"D45109",
									"D45117",
									"D45130",
									"D45138",
									"D45146",
									"D45154",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "D_X400_MY04_AJ61_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D55322",
								max: "D99999",
								sdv: [
									"D42929",
									"D42934",
									"D42939",
									"D42944",
									"D42949",
									"D42954",
									"D42959",
									"D42964",
									"D42969",
									"D42974",
									"D42979",
									"D42984",
									"D42989",
									"D42994",
									"D42999",
									"D43004",
									"D43009",
									"D43014",
									"D43019",
									"D43024",
									"D43029",
									"D43034",
									"D43039",
									"D43044",
									"D43049",
									"D43054",
									"D43059",
									"D43064",
									"D43069",
									"D43074",
									"D43079",
									"D43084",
									"D43089",
									"D43094",
									"D43099",
									"D43104",
									"D43109",
									"D43114",
									"D43119",
									"D43124",
									"D43129",
									"D43134",
									"D43139",
									"D43193",
									"D43198",
									"D43203",
									"D43208",
									"D43213",
									"D43218",
									"D43223",
									"D43228",
									"D43237",
									"D43245",
									"D43253",
									"D43261",
									"D43269",
									"D43277",
									"D43285",
									"D43293",
									"D43301",
									"D43309",
									"D43317",
									"D43325",
									"D43333",
									"D43341",
									"D43349",
									"D43357",
									"D43365",
									"D43373",
									"D43381",
									"D43389",
									"D43397",
									"D43405",
									"D43413",
									"D43421",
									"D43429",
									"D43437",
									"D43445",
									"D43453",
									"D43461",
									"D43533",
									"D43541",
									"D43549",
									"D43557",
									"D43565",
									"D43573",
									"D43581",
									"D43589",
									"D43597",
									"D43605",
									"D43613",
									"D43621",
									"D43629",
									"D43637",
									"D43645",
									"D43653",
									"D43661",
									"D43868",
									"D43876",
									"D43884",
									"D43892",
									"D43900",
									"D43908",
									"D43916",
									"D43924",
									"D43932",
									"D43940",
									"D43948",
									"D43956",
									"D43964",
									"D43972",
									"D43980",
									"D43988",
									"D43996",
									"D44004",
									"D44012",
									"D44020",
									"D44028",
									"D44036",
									"D44044",
									"D44052",
									"D44060",
									"D44068",
									"D44076",
									"D44084",
									"D44092",
									"D44100",
									"D44108",
									"D44116",
									"D44124",
									"D44132",
									"D44140",
									"D44148",
									"D44156",
									"D44164",
									"D44172",
									"D44180",
									"D44188",
									"D44196",
									"D44204",
									"D44212",
									"D44220",
									"D44228",
									"D44236",
									"D44244",
									"D44252",
									"D44260",
									"D44268",
									"D44276",
									"D44284",
									"D44292",
									"D44300",
									"D44308",
									"D44316",
									"D44324",
									"D44332",
									"D44341",
									"D44349",
									"D44357",
									"D44365",
									"D44373",
									"D44381",
									"D44389",
									"D44397",
									"D44405",
									"D44413",
									"D44421",
									"D44429",
									"D44437",
									"D44445",
									"D44453",
									"D44461",
									"D44469",
									"D44477",
									"D44485",
									"D44493",
									"D44501",
									"D44509",
									"D44517",
									"D44525",
									"D44533",
									"D44541",
									"D44549",
									"D44557",
									"D44565",
									"D44573",
									"D44581",
									"D44694",
									"D44702",
									"D44710",
									"D44718",
									"D44726",
									"D44734",
									"D44743",
									"D44751",
									"D44759",
									"D44767",
									"D44775",
									"D44783",
									"D44791",
									"D44799",
									"D44807",
									"D44815",
									"D44823",
									"D44832",
									"D44840",
									"D44848",
									"D44856",
									"D44864",
									"D44872",
									"D44880",
									"D44888",
									"D44896",
									"D44904",
									"D44913",
									"D44921",
									"D44929",
									"D44937",
									"D44945",
									"D44953",
									"D44961",
									"D44969",
									"D44977",
									"D44985",
									"D44994",
									"D45002",
									"D45010",
									"D45018",
									"D45027",
									"D45035",
									"D45043",
									"D45051",
									"D45060",
									"D45068",
									"D45076",
									"D45084",
									"D45093",
									"D45101",
									"D45109",
									"D45117",
									"D45130",
									"D45138",
									"D45146",
									"D45154",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "D_X400_MY04_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D55322",
								max: "D99999",
								sdv: [
									"D42929",
									"D42934",
									"D42939",
									"D42944",
									"D42949",
									"D42954",
									"D42959",
									"D42964",
									"D42969",
									"D42974",
									"D42979",
									"D42984",
									"D42989",
									"D42994",
									"D42999",
									"D43004",
									"D43009",
									"D43014",
									"D43019",
									"D43024",
									"D43029",
									"D43034",
									"D43039",
									"D43044",
									"D43049",
									"D43054",
									"D43059",
									"D43064",
									"D43069",
									"D43074",
									"D43079",
									"D43084",
									"D43089",
									"D43094",
									"D43099",
									"D43104",
									"D43109",
									"D43114",
									"D43119",
									"D43124",
									"D43129",
									"D43134",
									"D43139",
									"D43193",
									"D43198",
									"D43203",
									"D43208",
									"D43213",
									"D43218",
									"D43223",
									"D43228",
									"D43237",
									"D43245",
									"D43253",
									"D43261",
									"D43269",
									"D43277",
									"D43285",
									"D43293",
									"D43301",
									"D43309",
									"D43317",
									"D43325",
									"D43333",
									"D43341",
									"D43349",
									"D43357",
									"D43365",
									"D43373",
									"D43381",
									"D43389",
									"D43397",
									"D43405",
									"D43413",
									"D43421",
									"D43429",
									"D43437",
									"D43445",
									"D43453",
									"D43461",
									"D43533",
									"D43541",
									"D43549",
									"D43557",
									"D43565",
									"D43573",
									"D43581",
									"D43589",
									"D43597",
									"D43605",
									"D43613",
									"D43621",
									"D43629",
									"D43637",
									"D43645",
									"D43653",
									"D43661",
									"D43868",
									"D43876",
									"D43884",
									"D43892",
									"D43900",
									"D43908",
									"D43916",
									"D43924",
									"D43932",
									"D43940",
									"D43948",
									"D43956",
									"D43964",
									"D43972",
									"D43980",
									"D43988",
									"D43996",
									"D44004",
									"D44012",
									"D44020",
									"D44028",
									"D44036",
									"D44044",
									"D44052",
									"D44060",
									"D44068",
									"D44076",
									"D44084",
									"D44092",
									"D44100",
									"D44108",
									"D44116",
									"D44124",
									"D44132",
									"D44140",
									"D44148",
									"D44156",
									"D44164",
									"D44172",
									"D44180",
									"D44188",
									"D44196",
									"D44204",
									"D44212",
									"D44220",
									"D44228",
									"D44236",
									"D44244",
									"D44252",
									"D44260",
									"D44268",
									"D44276",
									"D44284",
									"D44292",
									"D44300",
									"D44308",
									"D44316",
									"D44324",
									"D44332",
									"D44341",
									"D44349",
									"D44357",
									"D44365",
									"D44373",
									"D44381",
									"D44389",
									"D44397",
									"D44405",
									"D44413",
									"D44421",
									"D44429",
									"D44437",
									"D44445",
									"D44453",
									"D44461",
									"D44469",
									"D44477",
									"D44485",
									"D44493",
									"D44501",
									"D44509",
									"D44517",
									"D44525",
									"D44533",
									"D44541",
									"D44549",
									"D44557",
									"D44565",
									"D44573",
									"D44581",
									"D44694",
									"D44702",
									"D44710",
									"D44718",
									"D44726",
									"D44734",
									"D44743",
									"D44751",
									"D44759",
									"D44767",
									"D44775",
									"D44783",
									"D44791",
									"D44799",
									"D44807",
									"D44815",
									"D44823",
									"D44832",
									"D44840",
									"D44848",
									"D44856",
									"D44864",
									"D44872",
									"D44880",
									"D44888",
									"D44896",
									"D44904",
									"D44913",
									"D44921",
									"D44929",
									"D44937",
									"D44945",
									"D44953",
									"D44961",
									"D44969",
									"D44977",
									"D44985",
									"D44994",
									"D45002",
									"D45010",
									"D45018",
									"D45027",
									"D45035",
									"D45043",
									"D45051",
									"D45060",
									"D45068",
									"D45076",
									"D45084",
									"D45093",
									"D45101",
									"D45109",
									"D45117",
									"D45130",
									"D45138",
									"D45146",
									"D45154",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "D_X400_MY04_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D55322",
								max: "D99999",
								sdv: [
									"D42929",
									"D42934",
									"D42939",
									"D42944",
									"D42949",
									"D42954",
									"D42959",
									"D42964",
									"D42969",
									"D42974",
									"D42979",
									"D42984",
									"D42989",
									"D42994",
									"D42999",
									"D43004",
									"D43009",
									"D43014",
									"D43019",
									"D43024",
									"D43029",
									"D43034",
									"D43039",
									"D43044",
									"D43049",
									"D43054",
									"D43059",
									"D43064",
									"D43069",
									"D43074",
									"D43079",
									"D43084",
									"D43089",
									"D43094",
									"D43099",
									"D43104",
									"D43109",
									"D43114",
									"D43119",
									"D43124",
									"D43129",
									"D43134",
									"D43139",
									"D43193",
									"D43198",
									"D43203",
									"D43208",
									"D43213",
									"D43218",
									"D43223",
									"D43228",
									"D43237",
									"D43245",
									"D43253",
									"D43261",
									"D43269",
									"D43277",
									"D43285",
									"D43293",
									"D43301",
									"D43309",
									"D43317",
									"D43325",
									"D43333",
									"D43341",
									"D43349",
									"D43357",
									"D43365",
									"D43373",
									"D43381",
									"D43389",
									"D43397",
									"D43405",
									"D43413",
									"D43421",
									"D43429",
									"D43437",
									"D43445",
									"D43453",
									"D43461",
									"D43533",
									"D43541",
									"D43549",
									"D43557",
									"D43565",
									"D43573",
									"D43581",
									"D43589",
									"D43597",
									"D43605",
									"D43613",
									"D43621",
									"D43629",
									"D43637",
									"D43645",
									"D43653",
									"D43661",
									"D43868",
									"D43876",
									"D43884",
									"D43892",
									"D43900",
									"D43908",
									"D43916",
									"D43924",
									"D43932",
									"D43940",
									"D43948",
									"D43956",
									"D43964",
									"D43972",
									"D43980",
									"D43988",
									"D43996",
									"D44004",
									"D44012",
									"D44020",
									"D44028",
									"D44036",
									"D44044",
									"D44052",
									"D44060",
									"D44068",
									"D44076",
									"D44084",
									"D44092",
									"D44100",
									"D44108",
									"D44116",
									"D44124",
									"D44132",
									"D44140",
									"D44148",
									"D44156",
									"D44164",
									"D44172",
									"D44180",
									"D44188",
									"D44196",
									"D44204",
									"D44212",
									"D44220",
									"D44228",
									"D44236",
									"D44244",
									"D44252",
									"D44260",
									"D44268",
									"D44276",
									"D44284",
									"D44292",
									"D44300",
									"D44308",
									"D44316",
									"D44324",
									"D44332",
									"D44341",
									"D44349",
									"D44357",
									"D44365",
									"D44373",
									"D44381",
									"D44389",
									"D44397",
									"D44405",
									"D44413",
									"D44421",
									"D44429",
									"D44437",
									"D44445",
									"D44453",
									"D44461",
									"D44469",
									"D44477",
									"D44485",
									"D44493",
									"D44501",
									"D44509",
									"D44517",
									"D44525",
									"D44533",
									"D44541",
									"D44549",
									"D44557",
									"D44565",
									"D44573",
									"D44581",
									"D44694",
									"D44702",
									"D44710",
									"D44718",
									"D44726",
									"D44734",
									"D44743",
									"D44751",
									"D44759",
									"D44767",
									"D44775",
									"D44783",
									"D44791",
									"D44799",
									"D44807",
									"D44815",
									"D44823",
									"D44832",
									"D44840",
									"D44848",
									"D44856",
									"D44864",
									"D44872",
									"D44880",
									"D44888",
									"D44896",
									"D44904",
									"D44913",
									"D44921",
									"D44929",
									"D44937",
									"D44945",
									"D44953",
									"D44961",
									"D44969",
									"D44977",
									"D44985",
									"D44994",
									"D45002",
									"D45010",
									"D45018",
									"D45027",
									"D45035",
									"D45043",
									"D45051",
									"D45060",
									"D45068",
									"D45076",
									"D45084",
									"D45093",
									"D45101",
									"D45109",
									"D45117",
									"D45130",
									"D45138",
									"D45146",
									"D45154",
									"D50901",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.0L AJD-I4",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "D_X400_MY04_TDCi_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D55322",
								max: "D99999",
								sdv: [
									"D42929",
									"D42934",
									"D42939",
									"D42944",
									"D42949",
									"D42954",
									"D42959",
									"D42964",
									"D42969",
									"D42974",
									"D42979",
									"D42984",
									"D42989",
									"D42994",
									"D42999",
									"D43004",
									"D43009",
									"D43014",
									"D43019",
									"D43024",
									"D43029",
									"D43034",
									"D43039",
									"D43044",
									"D43049",
									"D43054",
									"D43059",
									"D43064",
									"D43069",
									"D43074",
									"D43079",
									"D43084",
									"D43089",
									"D43094",
									"D43099",
									"D43104",
									"D43109",
									"D43114",
									"D43119",
									"D43124",
									"D43129",
									"D43134",
									"D43139",
									"D43193",
									"D43198",
									"D43203",
									"D43208",
									"D43213",
									"D43218",
									"D43223",
									"D43228",
									"D43237",
									"D43245",
									"D43253",
									"D43261",
									"D43269",
									"D43277",
									"D43285",
									"D43293",
									"D43301",
									"D43309",
									"D43317",
									"D43325",
									"D43333",
									"D43341",
									"D43349",
									"D43357",
									"D43365",
									"D43373",
									"D43381",
									"D43389",
									"D43397",
									"D43405",
									"D43413",
									"D43421",
									"D43429",
									"D43437",
									"D43445",
									"D43453",
									"D43461",
									"D43533",
									"D43541",
									"D43549",
									"D43557",
									"D43565",
									"D43573",
									"D43581",
									"D43589",
									"D43597",
									"D43605",
									"D43613",
									"D43621",
									"D43629",
									"D43637",
									"D43645",
									"D43653",
									"D43661",
									"D43868",
									"D43876",
									"D43884",
									"D43892",
									"D43900",
									"D43908",
									"D43916",
									"D43924",
									"D43932",
									"D43940",
									"D43948",
									"D43956",
									"D43964",
									"D43972",
									"D43980",
									"D43988",
									"D43996",
									"D44004",
									"D44012",
									"D44020",
									"D44028",
									"D44036",
									"D44044",
									"D44052",
									"D44060",
									"D44068",
									"D44076",
									"D44084",
									"D44092",
									"D44100",
									"D44108",
									"D44116",
									"D44124",
									"D44132",
									"D44140",
									"D44148",
									"D44156",
									"D44164",
									"D44172",
									"D44180",
									"D44188",
									"D44196",
									"D44204",
									"D44212",
									"D44220",
									"D44228",
									"D44236",
									"D44244",
									"D44252",
									"D44260",
									"D44268",
									"D44276",
									"D44284",
									"D44292",
									"D44300",
									"D44308",
									"D44316",
									"D44324",
									"D44332",
									"D44341",
									"D44349",
									"D44357",
									"D44365",
									"D44373",
									"D44381",
									"D44389",
									"D44397",
									"D44405",
									"D44413",
									"D44421",
									"D44429",
									"D44437",
									"D44445",
									"D44453",
									"D44461",
									"D44469",
									"D44477",
									"D44485",
									"D44493",
									"D44501",
									"D44509",
									"D44517",
									"D44525",
									"D44533",
									"D44541",
									"D44549",
									"D44557",
									"D44565",
									"D44573",
									"D44581",
									"D44694",
									"D44702",
									"D44710",
									"D44718",
									"D44726",
									"D44734",
									"D44743",
									"D44751",
									"D44759",
									"D44767",
									"D44775",
									"D44783",
									"D44791",
									"D44799",
									"D44807",
									"D44815",
									"D44823",
									"D44832",
									"D44840",
									"D44848",
									"D44856",
									"D44864",
									"D44872",
									"D44880",
									"D44888",
									"D44896",
									"D44904",
									"D44913",
									"D44921",
									"D44929",
									"D44937",
									"D44945",
									"D44953",
									"D44961",
									"D44969",
									"D44977",
									"D44985",
									"D44994",
									"D45002",
									"D45010",
									"D45018",
									"D45027",
									"D45035",
									"D45043",
									"D45051",
									"D45060",
									"D45068",
									"D45076",
									"D45084",
									"D45093",
									"D45101",
									"D45109",
									"D45117",
									"D45130",
									"D45138",
									"D45146",
									"D45154",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.2L AJD-I4) or X300(4.0L AJ26)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "D_X400_MY04_TDCi_2.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "E00001",
								max: "E99999",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "E_X400_MY04_AJ61_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "E00001",
								max: "E99999",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "E_X400_MY04_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "E00001",
								max: "E99999",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "E_X400_MY04_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "E00001",
								max: "E99999",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.0L AJD-I4",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "E_X400_MY04_TDCi_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "E00001",
								max: "E99999",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.2L AJD-I4) or X300(4.0L AJ26)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "E_X400_MY04_TDCi_2.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J00001",
								max: "J28492",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J_X400_MY04_AJ61_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J00001",
								max: "J28492",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J_X400_MY04_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J00001",
								max: "J28492",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J_X400_MY04_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J00001",
								max: "J28492",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.0L AJD-I4",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J_X400_MY04_TDCi_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2004 - 2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J00001",
								max: "J28492",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2004",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.2L AJD-I4) or X300(4.0L AJ26)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J_X400_MY04_TDCi_2.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J28493",
								max: "J40141",
								sdv: [
									"J19918",
									"J19919",
									"J24826",
									"J24828",
									"J24914",
									"J24915",
									"J24916",
									"J24917",
									"J24918",
									"J24919",
									"J24920",
									"J26795",
									"J26796",
									"J26797",
									"J26798",
									"J26799",
									"J26800",
									"J26801",
									"J26802",
									"J26803",
									"J26804",
									"J26836",
									"J26837",
									"J26838",
									"J26931",
									"J26932",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J08_X400_MY04_AJ61_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J28493",
								max: "J40141",
								sdv: [
									"J19918",
									"J19919",
									"J24826",
									"J24828",
									"J24914",
									"J24915",
									"J24916",
									"J24917",
									"J24918",
									"J24919",
									"J24920",
									"J26795",
									"J26796",
									"J26797",
									"J26798",
									"J26799",
									"J26800",
									"J26801",
									"J26802",
									"J26803",
									"J26804",
									"J26836",
									"J26837",
									"J26838",
									"J26931",
									"J26932",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J08_X400_MY04_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J28493",
								max: "J40141",
								sdv: [
									"J19918",
									"J19919",
									"J24826",
									"J24828",
									"J24914",
									"J24915",
									"J24916",
									"J24917",
									"J24918",
									"J24919",
									"J24920",
									"J26795",
									"J26796",
									"J26797",
									"J26798",
									"J26799",
									"J26800",
									"J26801",
									"J26802",
									"J26803",
									"J26804",
									"J26836",
									"J26837",
									"J26838",
									"J26931",
									"J26932",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J08_X400_MY04_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J28493",
								max: "J40141",
								sdv: [
									"J19918",
									"J19919",
									"J24826",
									"J24828",
									"J24914",
									"J24915",
									"J24916",
									"J24917",
									"J24918",
									"J24919",
									"J24920",
									"J26795",
									"J26796",
									"J26797",
									"J26798",
									"J26799",
									"J26800",
									"J26801",
									"J26802",
									"J26803",
									"J26804",
									"J26836",
									"J26837",
									"J26838",
									"J26931",
									"J26932",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.0L AJD-I4",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J08_X400_MY04_TDCi_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: {
								id: "CM_QUAL_FUEL",
								id_value: "VAL_DIESEL",
							},
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2008",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J28493",
								max: "J40141",
								sdv: [
									"J19918",
									"J19919",
									"J24826",
									"J24828",
									"J24914",
									"J24915",
									"J24916",
									"J24917",
									"J24918",
									"J24919",
									"J24920",
									"J26795",
									"J26796",
									"J26797",
									"J26798",
									"J26799",
									"J26800",
									"J26801",
									"J26802",
									"J26803",
									"J26804",
									"J26836",
									"J26837",
									"J26838",
									"J26931",
									"J26932",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2008",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.2L AJD-I4) or X300(4.0L AJ26)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J08_X400_MY04_TDCi_2.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_VCATS_MODEL_YEAR",
									id_value: "VAL_VCATS_200800",
								},
							],
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J40142",
								max: "J69999",
								sdv: ["J29141", "J29246", "J36670", "J39218"],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2009",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J09_X400_MY04_AJ61_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_VCATS_MODEL_YEAR",
									id_value: "VAL_VCATS_200800",
								},
							],
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J40142",
								max: "J69999",
								sdv: ["J29141", "J29246"],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2009",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J09_X400_MY04_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_SUPERCHARGED",
									id_value: "VAL_N_SUPERCHARGED",
								},
								{
									id: "CM_QUAL_VCATS_MODEL_YEAR",
									id_value: "VAL_VCATS_200800",
								},
							],
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J40142",
								max: "J69999",
								sdv: ["J29141", "J29246", "J36672", "J37638", "J39116", "J39383", "J39415"],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2009",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J09_X400_MY04_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_VCATS_MODEL_YEAR",
									id_value: "VAL_VCATS_200800",
								},
							],
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J40142",
								max: "J69999",
								sdv: [
									"J29141",
									"J29246",
									"J39291",
									"J39311",
									"J39315",
									"J39317",
									"J39340",
									"J39350",
									"J39370",
									"J39372",
									"J39376",
									"J39404",
									"J39411",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2009",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.0L AJD-I4",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J09_X400_MY04_TDCi_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "TDCi",
									},
									{
										type: "SubType",
										value: "2.2L",
									},
								],
								model: "X400",
								year: "MY04",
							},
							qualifier_map: [
								{
									id: "CM_QUAL_FUEL",
									id_value: "VAL_DIESEL",
								},
								{
									id: "CM_QUAL_VCATS_MODEL_YEAR",
									id_value: "VAL_VCATS_200800",
								},
							],
							model_year: {
								my_rds: "MY04",
								my_int: "200400",
								my_gui: "2009",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "J40142",
								max: "J69999",
								sdv: [
									"J29141",
									"J29246",
									"J36295",
									"J36296",
									"J36437",
									"J36438",
									"J36439",
									"J36440",
									"J36441",
									"J36442",
									"J36445",
									"J36446",
									"J36447",
									"J36448",
									"J36449",
									"J36450",
									"J36671",
									"J36673",
									"J36674",
									"J36675",
									"J36676",
									"J36679",
									"J37637",
									"J37639",
									"J37640",
									"J37641",
									"J37642",
									"J37643",
									"J37644",
									"J37645",
									"J37646",
									"J37667",
									"J37668",
									"J37669",
									"J37670",
									"J37671",
									"J37672",
									"J37673",
									"J37674",
									"J37675",
									"J37676",
									"J37699",
									"J37700",
									"J37701",
									"J37702",
									"J37703",
									"J37704",
									"J37705",
									"J37706",
									"J37707",
									"J37708",
									"J37730",
									"J37731",
									"J37732",
									"J37733",
									"J37734",
									"J37735",
									"J37736",
									"J37737",
									"J37738",
									"J37739",
									"J37761",
									"J37762",
									"J37763",
									"J37764",
									"J37765",
									"J37766",
									"J37767",
									"J37768",
									"J37769",
									"J37770",
									"J37793",
									"J37794",
									"J37795",
									"J37796",
									"J37797",
									"J37798",
									"J39115",
									"J39219",
									"J39220",
									"J39221",
									"J39222",
									"J39223",
									"J39224",
									"J39225",
									"J39226",
									"J39227",
									"J39228",
									"J39229",
									"J39230",
									"J39231",
									"J39232",
									"J39246",
									"J39247",
									"J39248",
									"J39249",
									"J39250",
									"J39251",
									"J39252",
									"J39253",
									"J39254",
									"J39255",
									"J39256",
									"J39257",
									"J39258",
									"J39259",
									"J39260",
									"J39278",
									"J39279",
									"J39280",
									"J39281",
									"J39282",
									"J39283",
									"J39284",
									"J39285",
									"J39286",
									"J39287",
									"J39288",
									"J39289",
									"J39290",
									"J39292",
									"J39308",
									"J39309",
									"J39310",
									"J39312",
									"J39313",
									"J39314",
									"J39316",
									"J39318",
									"J39319",
									"J39320",
									"J39321",
									"J39322",
									"J39339",
									"J39341",
									"J39342",
									"J39343",
									"J39344",
									"J39345",
									"J39346",
									"J39347",
									"J39348",
									"J39349",
									"J39351",
									"J39352",
									"J39353",
									"J39371",
									"J39373",
									"J39374",
									"J39375",
									"J39377",
									"J39378",
									"J39379",
									"J39380",
									"J39381",
									"J39382",
									"J39384",
									"J39405",
									"J39406",
									"J39407",
									"J39408",
									"J39409",
									"J39410",
									"J39412",
									"J39413",
									"J39414",
									"J39416",
									"J39417",
									"J39418",
									"J39419",
									"J39420",
									"J39421",
								],
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2009",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.2L AJD-I4) or X300(4.0L AJ26)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200400",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_2004_ON",
							id: "J09_X400_MY04_TDCi_2.2L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY01_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY01_5",
								my_int: "200150",
								my_gui: "2001",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "C00001",
								max: "D01807",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200150",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_PRE_2004",
							id: "CD_X400_MY01.5_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "3L",
									},
								],
								model: "X400",
								year: "MY01_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY01_5",
								my_int: "200150",
								my_gui: "2003",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D01808",
								max: "D55321",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "3.0L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200150",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_PRE_2004",
							id: "D_X400_MY01.5_AJ61_3.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY01_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY01_5",
								my_int: "200150",
								my_gui: "2001",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "C00001",
								max: "D01807",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200150",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_PRE_2004",
							id: "CD_X400_MY01.5_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2.5L",
									},
								],
								model: "X400",
								year: "MY01_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY01_5",
								my_int: "200150",
								my_gui: "2003",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D01808",
								max: "D55321",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "2.5L AJ-V6",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200150",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_PRE_2004",
							id: "D_X400_MY01.5_AJ61_2.5L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY01_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY01_5",
								my_int: "200150",
								my_gui: "2001",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "C00001",
								max: "D01807",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200150",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_PRE_2004",
							id: "CD_X400_MY01.5_AJ61_2.0L",
						},
						{
							scope: "NO_EU5",
							qualifier: {
								qual: [
									{
										type: "Type",
										value: "AJ61",
									},
									{
										type: "SubType",
										value: "2L",
									},
								],
								model: "X400",
								year: "MY01_5",
							},
							qualifier_map: {
								id: "CM_QUAL_SUPERCHARGED",
								id_value: "VAL_N_SUPERCHARGED",
							},
							model_year: {
								my_rds: "MY01_5",
								my_int: "200150",
								my_gui: "2003",
							},
							vin: {
								coding: {
									format: "SAJ_GLOBAL",
								},
								min: "D01808",
								max: "D55321",
								decode: {
									attribute: [
										{
											decode: "false",
											name: "Model",
											type: "1",
											value: "X400",
										},
										{
											decode: "false",
											name: "ModelYear",
											type: "2",
											value: "2001",
										},
										{
											decode: "false",
											name: "Engine",
											type: "1",
											value: "X400(2.0L AJ-V6) or X150(5.0L sc AJ-133)",
										},
									],
								},
							},
							file_manifest: {
								id: "X400_200150",
							},
							setup: {
								id: "JAGUAR_VID",
							},
							legacy_setup: "TOOL_SETUP_X400_PRE_2004",
							id: "D_X400_MY01.5_AJ61_2.0L",
						},
					],
				},
			],
			brand: "jaguar",
			config_model: "CONFIG_MODEL_JLR.xml",
		},
	],
	file_manifest: {
		manifest: [
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L319.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L319.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L319_200400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L319.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L319.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L319.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L319.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L319.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L319_200500",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L319_201000.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L319_201000.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L319_201000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L319_201000.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L319_201000.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L319_201000.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L319_201000.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L319_201000.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L319_201000",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L319_201200.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L319_201200.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L319_201200",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L319_201200.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L319_201200.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L319_201200.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L319_201200.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L319_201200.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L319_201200",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L319_201400.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L319_201400.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L319_201400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L319_201400.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L319_201400.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L319_201400.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L319_201400.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L319_201400.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L319_201400",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L320.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L320.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L320_200600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L320.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L320.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L320.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L320.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L320.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L320_200600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L320_201000.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L320_201000.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L320_201000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L320_201000.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L320_201000.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L320_201000.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L320_201000.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L320_201000.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L320_201000",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L320_201200.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L320_201200.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L320_201200",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L320_201200.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L320_201200.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L320_201200.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L320_201200.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L320_201200.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L320_201200",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L322.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L322.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L322_200400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L322.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L322.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L322.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L322.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "L322_200450",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L322_200600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L322_200600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L322_200600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L322_200600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L322_200600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L322_200600.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L322_200600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "L322_200600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L322_200700.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L322_200700.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L322_200700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L322_200700.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L322_200700.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L322_200600.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L322_200700.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L322_200700.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "L322_200700",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L322_201000.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L322_201000.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L322_201000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L322_201000.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L322_201000.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L322_201000.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_L322_201000.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L322_201000.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L322_201000",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L359.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L359.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L359_200700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L359.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L359.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L359.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L359.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_L359.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L359_200700",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L359_201100.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L359_201100.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L359_201100",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L359_201100.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L359_201100.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L359_201100.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L359_201100.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_L359.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L359_201100",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L359_201300.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L359_201300.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L359_201300",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L359_201300.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L359_201300.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L359_201300.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L359_201300.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_L359.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L359_201300",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L316.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L316.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L316_200700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L316.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L316.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L316.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L316.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L316_200700",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L316_201100.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L316_201100.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L316_201100",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L316_201100.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L316_201100.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L316_201100.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L316_201100.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L316_201100",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L316_201200.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L316_201200.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L316_201200",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L316_201200.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L316_201200.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L316_201200.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L316_201200.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L316_201200",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L538_201200.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L538_201200.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L538_201200",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L538_201200.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L538_201200.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L538_201200.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L538_201200.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L538_201200",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L538_201400.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L538_201400.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L538_201400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L538_201400.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L538_201400.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L538_201400.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L538_201400.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L538_201400",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L538_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L538_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L538_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L538_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L538_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L538_201600.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L538_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L538_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L538_201700.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L538_201700.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L538_201700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L538_201700.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L538_201700.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L538_201700.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L538_201700.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L538_201700",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L538C_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L538C_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L538C_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L538C_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L538_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L538_201600.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L538_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L538C_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L538JV_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L538JV_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L538JV_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L538JV_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L538_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L538_201600.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L538_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L538JV_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L405_201300.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L405_201300.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L405_201300",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L405_201300.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L405_201300.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L405_201300.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L405_201300.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L405_201300",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L405_201400.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L405_201400.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L405_201400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L405_201400.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L405_201400.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L405_201400.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L405_201400.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L405_201400",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L405_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L405_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L405_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L405_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L405_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L405_201600.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L405_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L405_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L494_201400.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L494_201400.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L494_201400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L494_201400.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L494_201400.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L494_201400.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L494_201400.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L494_201400",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L494_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L494_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L494_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L494_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L494_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L494_201600.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L494_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L494_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L550_201500.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L550_201500.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L550_201500",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L550_201500.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L550_201500.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L550_201500.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L550_201500.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L550_201500",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_L550_201700.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_L550_201700.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/L550_201700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_L550_201700.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_L550_201700.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_L550_201700.exml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_L550_201700.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "L550_201700",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X150.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X150.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X150_200650",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X150.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X150.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X150.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X150.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X150.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_X150.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X150_200650",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X150_201000.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X150_201000.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X150_201000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X150_201000.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X150_201000.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X150_201000.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X150.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X150_201000.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_X150.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X150_201000",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X152_201400.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X152_201400.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X152_201400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X152_201400.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X152_201400.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X152_201400.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X152_201400.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X152_201400.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X152_201400",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X152_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X152_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X152_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X152_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X152_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X152_201600.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X152_201600.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X152_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X152_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X760_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X760_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X760_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X760_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X760_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X760_201600.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X760_201600.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X760_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X760_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X760_201700.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X760_201700.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X760_201700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X760_201700.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X760_201700.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X760_201700.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X760_201700.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X760_201700.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X760_201700",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X260_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X260_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X260_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X260_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X260_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X260_201600.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X260_201600.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X260_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X260_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X761_201700.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X761_201700.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X761_201700",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X761_201700.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X761_201700.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X761_201700.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X761_201700.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X761_201700.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X761_201700",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X103.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X103_200300",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X103.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X103.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X100_200300",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X101.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X100_200100",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X101.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X100_200100",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X100.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X100_200000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X100.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X100_200000",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X202.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X202_200250",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X202.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X202.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X202_200250",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X204.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X204_200400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X204.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X204.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X202_200400",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X206.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X206_200600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X206.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X206.xml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X206.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X206.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X206_200600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X250.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X250.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X250_200800",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X250.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X250.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X250.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X250.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X250.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X250_200800",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X250_201000.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X250_201000.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X250_201000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X250_201000.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X250_201000.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X250_201000.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X250_201000.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X250.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X250_201000",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X250_201200.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X250_201200.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X250_201200",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X250_201200.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X250_201200.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X250_201200.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X250_201200.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X250_201200.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X250_201200",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X250_201300.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X250_201300.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X250_201300",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X250_201300.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X250_201300.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X250_201300.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X250_201300.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X250_201300.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X250_201300",
			},
			{
				file: [
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X350_200250",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X350.xml",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X350.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X350.xml",
					},
				],
				id: "X350_200250",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X356.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X356_200600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X356.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X356.xml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X356.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X356.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X350_200600",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X358.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X358_200800",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X358.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X358.xml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X358.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X358.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X350_200800",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X351_201000.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X351_201000.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X351_201000",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X351_201000.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X351_201000.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X351_201000.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X351_201000.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X351_201000.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X351_201000",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X351_201300.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X351_201300.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X351_201300",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X351_201300.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X351_201300.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X351_201300.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X351_201300.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X351_201300.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X351_201300",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X351_201600.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X351_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X351_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X351_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X351_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X351_201600.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X351_201600.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X351_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X351_201600",
			},
			{
				file: [
					{
						type: "XML_CCF_TEMPLATE",
						default: "yes",
						text: "CCF_DATA_X351_201900.xml",
					},
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X351_201600.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X351_201600",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X351_201600.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X351_201600.exml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X351_201600.exml",
					},
					{
						type: "XML_CCF_RULES",
						default: "yes",
						text: "CCF_RULES_X351_201600.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X351_201600.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
					{
						type: "XML_SWDL_ERROR",
						default: "yes",
						text: "SWDL_ERROR_DATA_GENERIC.xml",
					},
				],
				id: "X351_201900",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X404.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X404_200400",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X404.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X404.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X404.xml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X404.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X400_200400",
			},
			{
				file: [
					{
						type: "XML_CONFIG_MENU",
						default: "yes",
						text: "CONFIG_MENU_X400.xml",
					},
					{
						type: "XML_MODULE_DATA_PATH",
						default: "yes",
						text: "/X400_200150",
					},
					{
						type: "XML_PLATFORM",
						default: "yes",
						text: "PLATFORM_X400.xml",
					},
					{
						type: "XML_MDX_PROFILE",
						default: "yes",
						text: "MDX_PROFILE_X400.xml",
					},
					{
						type: "XML_SERVICE_RULES",
						default: "yes",
						text: "SERVICE_RULES_X400.xml",
					},
					{
						type: "XML_SOFTWARE_ARCHIVE",
						default: "yes",
						text: "SW_ARCHIVE_X400.xml",
					},
					{
						type: "XML_STATE_MODEL",
						default: "yes",
						text: "STATE_MODEL_JLR.xml",
					},
				],
				id: "X400_200150",
			},
		],
	},
	setup: [
		{
			platform: [
				{
					behaviour: [
						{
							type: "VM_CFG_UPLOAD",
							value: "CCF",
						},
						{
							type: "VM_DTC_READ",
							value: "1",
						},
						{
							type: "VM_VIN_READ",
							value: "MODE_09",
						},
						{
							type: "VM_CABLE",
							value: "VCM",
						},
					],
					type: "IDS",
				},
				{
					behaviour: [
						{
							type: "VM_CFG_UPLOAD",
							value: "CCF",
						},
						{
							type: "VM_DTC_READ",
							value: "1",
						},
						{
							type: "VM_CABLE",
							value: "VCM",
						},
					],
					type: "WDS_PC",
				},
			],
			id: "LANDROVER_T5",
		},
		{
			platform: {
				behaviour: [
					{
						type: "VM_CFG_UPLOAD",
						value: "CCF",
					},
					{
						type: "VM_DTC_READ",
						value: "1",
					},
					{
						type: "VM_VIN_READ",
						value: "MODE_09",
					},
					{
						type: "VM_CABLE",
						value: "VCM",
					},
				],
				type: "IDS",
			},
			id: "LANDROVER_EUCD",
		},
		{
			platform: {
				behaviour: [
					{
						type: "VM_CFG_UPLOAD",
						value: "CCF",
					},
					{
						type: "VM_DTC_READ",
						value: "1",
					},
					{
						type: "VM_VIN_READ",
						value: "MODE_09",
					},
					{
						type: "VM_CABLE",
						value: "VCM",
					},
				],
				type: "IDS",
			},
			id: "LANDROVER_DEFENDER",
		},
		{
			platform: [
				{
					behaviour: [
						{
							type: "VM_CFG_UPLOAD",
							value: "CCF",
						},
						{
							type: "VM_DTC_READ",
							value: "1",
						},
						{
							type: "VM_VIN_READ",
							value: "MODE_09",
						},
						{
							type: "VM_CABLE",
							value: "VCM",
						},
					],
					type: "IDS",
				},
				{
					behaviour: [
						{
							type: "VM_CFG_UPLOAD",
							value: "CCF",
						},
						{
							type: "VM_DTC_READ",
							value: "1",
						},
						{
							type: "VM_CABLE",
							value: "J1962_B280",
						},
					],
					type: "WDS_PTU",
				},
			],
			id: "JAGUAR_CCF",
		},
		{
			platform: [
				{
					behaviour: [
						{
							type: "VM_CFG_UPLOAD",
							value: "VID",
						},
						{
							type: "VM_DTC_READ",
							value: "1",
						},
						{
							type: "VM_VIN_READ",
							value: "MODE_09",
						},
						{
							type: "VM_CABLE",
							value: "VCM",
						},
					],
					type: "IDS",
				},
				{
					behaviour: [
						{
							type: "VM_CFG_UPLOAD",
							value: "VID",
						},
						{
							type: "VM_DTC_READ",
							value: "1",
						},
						{
							type: "VM_CABLE",
							value: "J1962_B208",
						},
					],
					type: "WDS_PTU",
				},
			],
			id: "JAGUAR_VID",
		},
	],
	as_built: [
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L319_BASE.zip",
				filter: "L319_*",
				append: "VIN_14",
				type: "VBF",
			},
			id: "AS_BUILT_L319",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L320_BASE.zip",
				filter: "L320_*",
				append: "VIN_14",
				type: "VBF",
			},
			id: "AS_BUILT_L320",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L322_BASE.zip",
				filter: "L322_*",
				append: "VIN_14",
				type: "VBF",
			},
			id: "AS_BUILT_L322",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L359_BASE.zip",
				filter: "L359*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_L359",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L538_BASE.zip",
				filter: "L538*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_L538",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L405_BASE.zip",
				filter: "L405*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_L405",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L494_BASE.zip",
				filter: "L494*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_L494",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_L550_BASE.zip",
				filter: "L550*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_L550",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X150_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X150",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X250_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X250",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X351_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X351",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X152_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X152",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X760_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X760",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X260_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X260",
		},
		{
			file_spec: {
				url: {
					type: "local",
					text: "flash\\vbf\\as-built",
				},
				archive: "CCF_X761_BASE.zip",
				filter: "*",
				append: "VIN_6",
				type: "VBF",
			},
			id: "AS_BUILT_X761",
		},
	],
	legacy_setup: [
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "0",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_LANDROVER",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "PORTED_X1",
					},
					{
						type: "Qualtype",
						value: "X103_2003",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC5",
					},
					{
						type: "Database",
						value: "RTD",
					},
					{
						type: "Filespec",
						value: "X12K3.DAT",
					},
				],
			},
			id: "TOOL_SETUP_X100_2003",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "PORTED_X1",
					},
					{
						type: "Qualtype",
						value: "X100_2001",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC3",
					},
					{
						type: "Database",
						value: "RTD",
					},
					{
						type: "Filespec",
						value: "X12K1.DAT",
					},
				],
			},
			id: "TOOL_SETUP_X100_2001",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "PORTED_X1",
					},
					{
						type: "Qualtype",
						value: "X100_2000",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC3",
					},
					{
						type: "Database",
						value: "RTD",
					},
					{
						type: "Filespec",
						value: "X12K.DAT",
					},
				],
			},
			id: "TOOL_SETUP_X100_2000",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "1",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "1",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X150_200650",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "1",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X150_2010",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X152_2014",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X760_2016",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X260_2016",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X761_2017",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "1",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X250_2008",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X250_2010",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X250_2012",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X202_PRE_2004",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X202_2004",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X202_2006_ON",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X350_PRE_2006",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X350_2006_ON",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_GUIDED",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "0",
					},
					{
						type: "VccDatabase",
						value: "0",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "",
					},
					{
						type: "Database",
						value: "",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X351",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X400_PRE_2004",
		},
		{
			tool_availability: {
				behaviour: [
					{
						type: "TOOL_AVAILABILITY_CIV",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_DSB",
						value: "0",
					},
					{
						type: "TOOL_AVAILABILITY_JVA",
						value: "1",
					},
				],
			},
			vinvcc: {
				behaviour: [
					{
						type: "Datacat",
						value: "WDS",
					},
					{
						type: "Qualtype",
						value: "NATIVE",
					},
					{
						type: "VccVidBlock",
						value: "1",
					},
					{
						type: "VccDatabase",
						value: "1",
					},
					{
						type: "VccAsBuilt",
						value: "0",
					},
					{
						type: "VccFormat",
						value: "VCC4",
					},
					{
						type: "Database",
						value: "DTE",
					},
					{
						type: "Filespec",
						value: "",
					},
				],
			},
			id: "TOOL_SETUP_X400_2004_ON",
		},
	],
};
