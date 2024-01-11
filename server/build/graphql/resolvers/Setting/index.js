"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const image_store_1 = require("../../../lib/utils/image-store");
exports.settingsResolvers = {
    Query: {
        getSetting: (_root, { key }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.settings.findOne({ key: key });
        }),
        getSiteSetting: (_root, { key }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            const siteSetting = yield db.settings.findOne({ key: key });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { _id, key: key1, value } = siteSetting;
            return {
                _id: _id.toString(),
                key: key1,
                value: JSON.stringify(value)
            };
        })
    },
    Mutation: {
        updateSiteSetting: (_root, { key, value }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const siteSetting = yield db.settings.findOne({ key: key });
            const settingValues = JSON.parse(value);
            if (!siteSetting) {
                let imagePath = '';
                let faviconPath = '';
                if (settingValues.image_data) {
                    imagePath = (0, image_store_1.storeImage)(settingValues.image, settingValues.image_data.name);
                }
                else {
                    imagePath = null;
                }
                if (settingValues.favicon_data) {
                    faviconPath = (0, image_store_1.storeImage)(settingValues.favicon, settingValues.favicon_data.name);
                }
                else {
                    faviconPath = null;
                }
                const settingData = {
                    _id: new mongodb_1.ObjectId(),
                    key: key,
                    value: {
                        image: imagePath,
                        favicon: faviconPath,
                        site_title: settingValues.site_title,
                        site_keyword: settingValues.site_keyword,
                        site_description: settingValues.site_description,
                        whatsapp_bot_is_on: false,
                        shopIsOnline: false,
                        address: settingValues.address,
                        latitude: settingValues.latitude,
                        longitude: settingValues.longitude
                    }
                };
                const insertResult = yield db.settings.insertOne(settingData);
                return {
                    _id: insertResult.ops[0]._id,
                    key: insertResult.ops[0].key,
                    value: JSON.stringify(insertResult.ops[0].value)
                };
            }
            let imagePath = '';
            if (settingValues.image_data) {
                imagePath = (0, image_store_1.storeImage)(settingValues.image, settingValues.image_data.name);
            }
            else {
                imagePath = settingValues.image;
            }
            let faviconPath = '';
            if (settingValues.favicon_data) {
                faviconPath = (0, image_store_1.storeImage)(settingValues.favicon, settingValues.favicon_data.name);
            }
            else {
                faviconPath = settingValues.favicon;
            }
            const settingData = {
                key: key,
                value: {
                    image: imagePath,
                    favicon: faviconPath,
                    site_title: settingValues.site_title,
                    site_keyword: settingValues.site_keyword,
                    site_description: settingValues.site_description,
                    whatsapp_bot_is_on: settingValues.whatsapp_bot_is_on,
                    shopIsOnline: settingValues.shopIsOnline,
                    address: settingValues.address,
                    latitude: settingValues.latitude,
                    longitude: settingValues.longitude
                }
            };
            yield db.settings.updateOne({ _id: siteSetting._id }, { $set: settingData });
            const updatedSiteSetting = yield db.settings.findOne({ _id: siteSetting._id });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { _id, key: key1, value: updatedValue } = updatedSiteSetting;
            return {
                _id: _id,
                key: key1,
                value: JSON.stringify(updatedValue)
            };
        }),
    },
    MainType: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (setting) => setting._id.toString(),
    }
};
