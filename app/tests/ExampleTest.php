<?php

class ExampleTest extends TestCase {

    protected $useDatabase = true;

    /**
     * test user logout
     *
     * @return void
     */

    public function testLogout()
    {
        $response = $this->call('GET', '/user/logout');
        $responseText = json_decode($response->getContent());
        $this->assertEquals('ok', $responseText->success_text);
        $this->assertResponseOk();
    }

    /**
     * test user login
     *
     * @return void
     */
    public function testLogin()
    {
        $response = $this->call('POST', '/user/login');
        $responseText = json_decode($response->getContent());
        $this->assertResponseStatus(401);
    }

}