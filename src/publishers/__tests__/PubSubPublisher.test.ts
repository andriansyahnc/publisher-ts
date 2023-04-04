import PubSubPublisher from "../PubSubPublisher";
import {PubSub} from "@google-cloud/pubsub";

jest.mock('@google-cloud/pubsub', () => ({
    PubSub: jest.fn()
}));

describe('PubSubPublisher', () => {
    test('Have publish property', () => {
        const publisher = new PubSubPublisher();
        expect(publisher).toHaveProperty('publish');
    });

    test('call pubsub class from google pubsub once', () => {
        const pubsub = PubSub.prototype;

        const publisher = new PubSubPublisher();
        expect(pubsub).toHaveBeenCalled();
    })
})