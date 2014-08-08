<?php

class ExampleTest extends TestCase {

    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $response = $this->call('GET', '/user/logout');
        $responseText = json_decode($response->getContent());
        $this->assertEquals('ok', $responseText->success_text);
        $this->assertResponseOk();
    }

}